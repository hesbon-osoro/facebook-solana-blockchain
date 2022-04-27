import { useState, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import Signup from '../components/Signup';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';

const style = {
	wrapper: `bg-[#18191a] min-h-screen duration-[o.5s]`,
	homeWrapper: `flex`,
	center: `flex-1`,
	main: `flex-1 flex justify-content`,
	signupContainer: `flex items-center justify-center w-screen h-[70vh]`,
};
export default function Home() {
	const [registered, setRegistered] = useState(false);
	const [name, setName] = useState('');
	const [url, setUrl] = useState('');
	const [users, setUsers] = useState([]);

	useEffect(() => {
		(async () => {
			await requestUsersData();
		})();
	}, []);

	const wallet = useWallet();
	const requestUsersData = async activeAccount => {
		try {
			const response = await fetch(`/api/fetchUsers`);
			const data = await response.json();
			setUsers(data.data);
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div className={style.wrapper}>
			<Header name={name} url={url} />

			{registered ? (
				<div className={style.homeWrapper}>
					<Sidebar name={name} url={url} />
					<div className={style.main}>
						<Feed connected={wallet.connected} name={name} url={url} />
					</div>
					<RightSidebar
						getUsers={requestUsersData}
						users={users}
						setUsers={setUsers}
					/>
				</div>
			) : (
				<div className={style.signupContainer}>
					<Signup
						setRegistered={setRegistered}
						name={name}
						setName={setName}
						url={url}
						setUrl={setUrl}
					/>
				</div>
			)}
		</div>
	);
}
