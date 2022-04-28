import { client } from '../../lib/sanity';

const getUserInfo = async (_req, res) => {
	try {
		const query = `*[_type=="users"]{name, walletAddress, profileImage}`;

		const sanityResponse = await client.fetch(query);

		res.status(200).json({ message: success, data: sanityResponse });
	} catch (e) {
		res.status(500).json({ message: 'error', data: e.message });
	}
};

export default getUserInfo;
