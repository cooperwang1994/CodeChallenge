const mongoose = require('mongoose');
const {Schema} = mongoose;

const DataSchema = new Schema({

        user_info: {
          serial: Number,
          email: String
        
        },
        print_info: {
          files: {
            input: String,
            output: String
          },
          printer: {
            modelNumber: Number
          },
          pressure: {
            extruder0: Number,
            extruder1: Number,
            extruder2: Number,
            extruder3: Number,
            extruder4: Number,
            extruder5: Number
          },
          temperature: {
            extruder0: Number,
            extruder1: Number,
            extruder2: Number,
            extruder3: Number,
            extruder4: Number,
            extruder5: Number
          },
          material: {
            extruder0: String,
            extruder1: String,
            extruder2: String,
            extruder3: String,
            extruder4: String,
            extruder5: String
          },
          crosslinking: {
            cl_enabled: Boolean,
            cl_duration: Number,
            cl_intensity: Number
          },
          resolution: {
            layerNum: Number,
            layerHeight: Number
          },
          wellplate: Number
        },
        print_data: {
          livePercent: Number,
          elasticity: Number,
          deadPercent: Number
        }

});

exports.Data = mongoose.model('Data', DataSchema);

