const sns = require('./helpers/sns')
const config = require('config')

const track = (event, payload) => {
    sns.publish(config.get('Services.SamSlacker.Arn'), {
        project_id: config.get('Services.SamSlacker.ProjectId'),
        event: event,
        arguments: Object.assign({}, {
            project_id: config.get('Services.SamSlacker.ProjectId'),
        }, payload)
    })
}

module.export = {
    track
}
