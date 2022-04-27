import Image from 'next/image';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo('en-US');

const Comment = ({ comment }) => {
	const style = {
		commentWrapper: `flex`,
		profileImageContainer: `object-cover mr-2`,
		profileImage: `rounded-full`,
		commentContainer: `bg-[#3a3b3c] rounded-2xl text-white py-2 px-3`,
		name: `text-[#a6aba4] text-sm font-semibold`,
		actionItem: `text-[#a6aba4] text-sm font-bold cursor-pointer`,
		timestamp: `text-[#a6aba4] text-sm`,
	};
	return (
		<>
			<div className={style.commentWrapper}>
				<div className={style.profileImageContainer}>
					<Image
						className={style.profileImage}
						src={comment.commenterUrl}
						width={40}
						height={40}
					/>
				</div>
				<div className={style.commentContainer}>
					<div className={style.name}>
						{comment.commenterName}
						{comment.commenterName}
					</div>
					<div>{comment.text}</div>
				</div>
			</div>
			<div className={style.commentActionsContainer}>
				<div className={style.actionItem}>Like</div>
				<div className={style.actionItem}>Reply</div>
				<div className={style.timestamp}>
					{timeAgo.format(
						new Date(comment.postTime.toNumber() * 10000),
						'twitter-now'
					)}
				</div>
			</div>
		</>
	);
};

export default Comment;
