const express = require('express');
const validUrl = require('valid-url');
const shortid = require('shortid');
const Url = require('../models/Url');

const router = express.Router();
const baseUrl = process.env.BASE_URL || 'http:localhost:5000';

router.post('/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!validUrl.isUri(baseUrl)) return res.status(401).json('Invalid base URL');
  if (!validUrl.isUri(originalUrl)) return res.status(401).json('Invalid long URL');

  try {
    let url = await Url.findOne({
      originalUrl,
    });

    if (url) return res.json(url);

    const urlHash = shortid.generate();
    const shortUrl = `${baseUrl}/${urlHash}`;

    url = new Url({
      originalUrl,
      shortUrl,
      urlHash,
    });
    await url.save();

    res.json(url);
  } catch (err) {
    res.status(500).json('Server Error');
  }
});

router.get('/:hash', async (req, res) => {
  try {
    const url = await Url.findOne({
      urlHash: req.params.hash,
    });
    if (url) {
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json('URL No Found');
    }
  } catch (err) {
    res.status(500).json('Server Error');
  }
});

module.exports = router;
