// Helper

import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import data from './data';
import { coreAbi } from './abi/coreAbi';
import { tokenAbi } from './abi/tokenAbi';

export async function getNetwork() {
  const chainId = Number(
    await window.ethereum.request({ method: 'eth_chainId' })
  );
  return chainId;
}

export async function getRPC() {
  const chainId = await getNetwork();
  return data?.[0][parseInt(chainId)]?.rpcUrl;
}

export async function getAddress() {
  const provider = await detectEthereumProvider();
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  await delay(500);
  if (provider && provider.selectedAddress) {
    return provider.selectedAddress;
  } else {
    return;
  }
}

export async function getSigner() {
  let address = await getAddress();
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  if (provider && address) {
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    return signer;
  } else {
    return;
  }
}

export async function getTokenAddress() {
  const chainId = await getNetwork();
  return data?.[0][parseInt(chainId)]?.tokenAddress;
}

export async function getCoreAddress() {
  const chainId = await getNetwork();
  return data?.[0][parseInt(chainId)]?.coreContract;
}

export async function getProvider() {
  const rpc = await getRPC();
  const provider = new ethers.providers.JsonRpcProvider(rpc);
  return provider;
}

// Read

export async function getCallAvailable() {
  try {
    const rpc = await getRPC();
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    let contractAddress = await getCoreAddress();
    const contract = new ethers.Contract(contractAddress, coreAbi, provider);
    let userAddress = await getAddress();
    let data = await contract.userPendingCallValue(userAddress);
    return data;
  } catch (err) {
    return { status: false, err };
  }
}

// export async function getTokenAbi() {
//   try {
//     const rpc = await getRPC();
//     const provider = new ethers.providers.JsonRpcProvider(rpc);
//     let contractAddress = await getCoreAddress();
//     const contract = new ethers.Contract(contractAddress, tokenAbi, provider);
//     let data = await contract.rate('0');
//     return data.toString();
//   } catch (err) {
//     return { status: false, err };
//   }
// }

// Write

export async function writeCallAvailable() {
  try {
    const rpc = await getRPC();
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    let contractAddress = await getCoreAddress();
    const contract = new ethers.Contract(contractAddress, coreAbi, provider);
    let userAddress = await getAddress();
    let data = await contract.userPendingCallValue(userAddress);
    return data;
  } catch (err) {
    return { status: false, err };
  }
}
