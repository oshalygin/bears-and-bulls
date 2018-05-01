const mongoose = require('mongoose')
const db = require('../models')
mongoose.Promise = global.Promise

mongoose.connect(
	process.env.MONGODB_URI || 'mongodb://localhost/BearsAndBulls'
)

const ledgerSeed = [
	{
		symbol: "TSLA",
		purchase_price: 50,
		stock_count: 5,
		is_owned: true,
	},{
		symbol: "FB",
		purchase_price: 170,
		stock_count: 5,
		is_owned: true,
	}, {
		symbol: "MNKD",
		purchase_price: 1.70,
		stock_count: 50,
		is_owned: true,
	}, {
		symbol: "SNAP",
		purchase_price: 20,
		stock_count: 25,
		is_owned: true,
	}
]

const userSeed = [
	{
		first_name: 'Devin',
		last_name: 'Thomas',
		email: 'dthomase30@gmail.com',
		account_balance: 10000
	}, {
		first_name: 'Nema',
		last_name: 'Darban',
		email: 'nema.darban@gmail.com',
		account_balance: 10000
	}, {
		first_name: 'Daphne',
		last_name: 'Chen',
		email: 'daphne@gmail.com',
		account_balance: 10000
	}, {
		first_name: 'Jeremy',
		last_name: 'Gruhlkey',
		email: 'jeremygruhlkey@gmail.com',
		account_balance: 10000
	}
]


/*db.Ledger
	.remove({})
	.then(() => db.Ledger.collection.insertMany(ledgerSeed))
	.then(data => {
		console.log(data.insertedIds.length + " ledger entries added")
		process.exit(0)
	})
	.catch(err => {
		console.error(err)
		process.exit(1)
	})*/

function seedLedger(ids) {
	let userIds = []
	//const userids = ids.map(id => console.log(id))
	Object.keys(ids).forEach(key => userIds.push(ids[key]))
	//console.log(userIds)

	db.Ledger
		.remove({})
		.then(() => {
			userIds.map(id => return id).then((res) => console.log(res) )
			
			/*ids.forEach(id => {
				console.log(id)
				db.Ledger.insertMany(ledgerSeed)
					.then(data => {
						console.log(data)
						//process.exit(0)
					})
					.catch(err => {
						console.error(err)
						//process.exit(1)
					})
			})*/
		})
}


function seedUsers(req, res) {

		db.Users.remove({})
			.then(() => db.Users.collection.insertMany(userSeed))
			.then(data => {
				console.log(`${data.insertedCount} user records created.`)
				seedLedger(data.insertedIds)
				process.exit(0)
			})
			.catch(err => {
				console.log(err)
				console.log(1)
			})

}

seedUsers();
//seedLedger()
