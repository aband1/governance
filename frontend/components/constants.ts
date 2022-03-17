import { Keypair, PublicKey } from '@solana/web3.js'
import PYTH_MINT_ACCOUNT_ADDRESS from '../../staking/app/keypairs/pyth_mint_account.json'
import PYTH_MINT_AUTHORITY from '../../staking/app/keypairs/pyth_mint_authority.json'

export const STAKING_PROGRAM = new PublicKey(
  'Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS'
)

export const PYTH_MINT_ACCOUNT_PUBKEY = new PublicKey(PYTH_MINT_ACCOUNT_ADDRESS)
export const PYTH_MINT_AUTHORITY_KEYPAIR = Keypair.fromSecretKey(
  Uint8Array.from(PYTH_MINT_AUTHORITY)
)

export const STAKE_ACCOUNT_METADATA_SEED = 'stake_metadata'
export const CUSTODY_SEED = 'custody'
export const AUTHORITY_SEED = 'authority'

export const DISCRIMINANT_SIZE = 8
export const POSITION_SIZE = 104
export const MAX_POSITIONS = 100
export const PUBKEY = 32

export const POSITIONS_ACCOUNT_SIZE =
  POSITION_SIZE * MAX_POSITIONS + DISCRIMINANT_SIZE + PUBKEY