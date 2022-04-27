import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { FacebookClone } from '../target/types/facebook_clone';

describe('facebook-clone', () => {
	// Configure the client to use the local cluster.
	anchor.setProvider(anchor.AnchorProvider.env());

	const program = anchor.workspace.FacebookClone as Program<FacebookClone>;

	it('Is initialized!', async () => {
		// Add your test here.
		const tx = await program.methods.initialize().rpc();
		console.log('Your transaction signature', tx);
	});
});
