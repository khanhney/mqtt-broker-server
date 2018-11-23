const mongoose          = require('mongoose');
const uuidv4            = require('uuid/v4');
const ip                = require("ip");
const Schema            = mongoose.Schema;
const USER_MODEL        = require('./User');
// const publicIp          = require('public-ip');
const InstaceSchema = mongoose.Schema({
    server  : { type: String, trim: true, default: '35.196.78.255' },
    user    : { type: String, trim: true },
    pwd     : { type: String, trim: true },
    status  : { type: Number, default: 1 },
    createAt: { type: Date, default: Date.now },
    port    : { type: String, default: '1883' },
    owner   : {
        type: Schema.Types.ObjectId,
        ref : 'user'
    }
});
const InstaceOrigin = mongoose.model('instace', InstaceSchema);

class Instace extends InstaceOrigin {
   static Insert(owner) {
       return new Promise(async resolve => {
            try {

                /**
                 * kiểm tra 1 user chỉ có 5 instaces
                 */
                let countInstacesOfOwner = await Instace.count({
                    owner: owner
                });

                if (countInstacesOfOwner > 4) return resolve({ error: true, message: 'instace_of_user_more_5_item' });
                let newItem  = new Instace({ user: uuidv4(), pwd: uuidv4(), owner: owner });
                let saveItem = await newItem.save();
                if (!newItem) return resolve({ error: true, message: 'cannot_insert_instace' });
                return resolve({ error: false, data: saveItem });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }            
       });
   }

   static ListInstacesOfUser(owner) {
       return new Promise(async resolve => {
            try {
                let checkExistOwner = await USER_MODEL.findById(owner);
                if (!checkExistOwner) return resolve({ error: true, message: 'user_not_exist' });
                let listInstaces    = await Instace.find({ owner: owner }).populate('owner').sort({ createAt: -1 });
                if (!listInstaces) return resolve({ error: true, message: 'cannot_get_list_instaces' });
                return resolve({ error: false, data: listInstaces });
            } catch (error) {
                return resolve({ error: true, message: error.message });
            }
       });
   }

   static InstaceDetail(instaceID, owner) {
       return new Promise(async resolve => {
           try {
               let infoDetail = await Instace.findOne({
                   _id: instaceID, owner: owner
               }).populate('owner');
               if (!infoDetail) return resolve({ erorr: true, message: 'cannot_get_info_instace' });
               return resolve({ erorr: false, data: infoDetail })
           } catch (error) {
                return resolve({ erorr: true, message: error.message });   
           }
       })
   }

   static UpdateStatus (instaceID, status, owner) {
       return new Promise(async resolve => {
           try {
               let checkExistInstace = await Instace.findOne({ _id: instaceID, owner: owner});
               if (!checkExistInstace) return resolve({ erorr: true, message: 'instace_not_exist' });
               let updateInstace     = await Instace.findByIdAndUpdate(instaceID, { status: status }, { new: true });
               return resolve({ erorr: false, data: updateInstace });
           } catch (error) {
               return resolve({ erorr: true, message: error.message });
           }
       })
   }

   static rotateUser (instaceID, owner) {
        return new Promise(async resolve => {
            try {
                let checkExistInstace = await Instace.findOne({ _id: instaceID, owner: owner});
                if (!checkExistInstace) return resolve({ erorr: true, message: 'instace_not_exist' });
                let updateInstace     = await Instace.findOneAndUpdate({
                    _id: instaceID, owner, 
                }, { user: uuidv4() }, { new: true });
                if (!updateInstace) return resolve({ erorr: true, message: 'cannot_update_instace' });
                return resolve({ erorr: false, data: updateInstace });
            } catch (error) {
                return resolve({ erorr: true, message: error.message });
            }
        })
   }

   static rotatePwd (instaceID, owner) {
    return new Promise(async resolve => {
        try {
            let checkExistInstace = await Instace.findOne({ _id: instaceID, owner: owner});
            if (!checkExistInstace) return resolve({ erorr: true, message: 'instace_not_exist' });
            let updateInstace     = await Instace.findOneAndUpdate({
                _id: instaceID, owner, 
            }, { pwd: uuidv4() }, { new: true });
            if (!updateInstace) return resolve({ erorr: true, message: 'cannot_update_instace' });
            return resolve({ erorr: false, data: updateInstace });
        } catch (error) {
            return resolve({ erorr: true, message: error.message });
        }
    })
}
}

module.exports = Instace;