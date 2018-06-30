const AWS = require('aws-sdk')
const config = require('config')

const hasAwsConfig = config.has('Services.AWS')

if (hasAwsConfig) {
    AWS.config.update(config.get('Services.AWS'))
}
const snsPublish = require('aws-sns-publish')

const publish = (arn, payload) => {
    if (!hasAwsConfig) {
        throw new Error('Services.AWS has not yet been added into config')
    } else {
        snsPublish(JSON.stringify(payload), {
            arn: arn
        }).catch(e => {
            throw e
        })
    }
}

module.exports = {
    publish
}
