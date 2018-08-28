import Web3 from 'web3';

// 크롬 자체에 메타메스크에 의해서 주입된 web3의 provider를 가져와서 신상 web3@1.0.0의 provider를 교체
const web3 = new Web3(window.web3.currentProvider);

export default web3;

