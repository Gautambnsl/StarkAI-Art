//initialize Provider
const provider = new Provider({
  sequencer: { network: constants.NetworkName.SN_GOERLI },
});
// Connect the deployed Test contract in Testnet
const testAddress =
  '0x5f7cd1fd465baff2ba9d2d1501ad0a2eb5337d9a885be319366b5205a414fdd';

// read abi of Test contract
const { abi: testAbi } = await provider.getClassAt(testAddress);
if (testAbi === undefined) {
  throw new Error('no abi.');
}
const myTestContract = new Contract(testAbi, testAddress, provider);

// Interaction with the contract with call
const bal1 = await myTestContract.get_balance();
console.log('Initial balance =', bal1.res.toString()); // .res because the return value is called 'res' in the Cairo 0 contract.
// With Cairo 1 contract, the result value is in bal1, as bigint.
