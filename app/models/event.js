var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Event = new Schema({
    type: { type: String, trim: true },
    ip: {type: String, trim: true},
    user: {type: String, trim: false},
    user_agent: {
        mobile: {type: Boolean},
        browser: {
            name: {type: String},
            version: {type: String}
        },
        os: {
            name: {type: String},
            version: {type: String}
        },
        device: {type: String}
    },
    geo: {
        country: {type: String, trim: false},
        region: {type: String, trim: false},
        latitude: {type: Number},
        longitude: {type: Number}
    },
    metadata: {
        campaign: {type: String, trim: false},
        influencer: {type: String, trim: false}
    }
},
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt'
        }
    });

module.exports = mongoose.model('Event', Event);
