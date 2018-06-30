# Sam Slacker API wrapper

[![Version](https://img.shields.io/npm/v/samslacker.svg)](https://www.npmjs.org/package/samslacker)
[![Downloads](https://img.shields.io/npm/dm/samslacker.svg)](https://www.npmjs.com/package/samslacker)

## Installation

Install the package with:

    npm install samslacker --save

Set `config` values

    {
        "Services": {
            "AWS": {
                "accessKeyId": "",
                "secretAccessKey": "",
                "region": "us-east-1"
            },
            "SamSlacker": {
                "Arn": "",
                "ProjectId": ""
            }
        }
    }


Usage:

    const event = require('samslacker-node/lib/event');
    event.track('Event Triggered', payload);