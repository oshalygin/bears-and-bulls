const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
	first_name: {
		type: String
	},
	last_name: {
		type: String
	},
	email: {
		type: String
	},
	account_balance: {
		type: Number,
		default: 100000
	},
	ledger: [{
		type: Schema.Types.ObjectId,
		ref: 'Ledger'
	}]
}, { timestamps: Date })

let Users = mongoose.model('Users', UserSchema)

module.exports = Users