import { client } from '../../lib/sanity';

const createUserOnSanity = async (req, res) => {
	try {
		const userDoc = {
			_type: 'users',
			_id: req.body.userWalletAddress,
			name: req.body.name,
			walletAddress: req.body.userWalletAddress,
			profileImage: req.body.profileImage,
		};

		await client.createIfNotExists(userDoc);
		res.status(200).json({ message: 'success' });
	} catch (e) {
		res.status(500).json({ message: 'error', data: e.message });
	}
};

export default createUserOnSanity;
