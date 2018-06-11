import { Schema } from '@0xproject/json-schemas';
import { BigNumber } from '@0xproject/utils';
import { Web3Wrapper } from '@0xproject/web3-wrapper';
import { ECSignature } from '../types';
export declare const assert: {
    isValidSignature(orderHash: string, ecSignature: ECSignature, signerAddress: string): void;
    isSenderAddressAsync(variableName: string, senderAddressHex: string, web3Wrapper: Web3Wrapper): Promise<void>;
    isUserAddressAvailableAsync(web3Wrapper: Web3Wrapper): Promise<void>;
    isBigNumber(variableName: string, value: BigNumber): void;
    isValidBaseUnitAmount(variableName: string, value: BigNumber): void;
    isString(variableName: string, value: string): void;
    isFunction(variableName: string, value: any): void;
    isHexString(variableName: string, value: string): void;
    isETHAddressHex(variableName: string, value: string): void;
    doesBelongToStringEnum(variableName: string, value: string, stringEnum: any): void;
    hasAtMostOneUniqueValue(value: any[], errMsg: string): void;
    isNumber(variableName: string, value: number): void;
    isBoolean(variableName: string, value: boolean): void;
    isWeb3Provider(variableName: string, value: any): void;
    doesConformToSchema(variableName: string, value: any, schema: Schema): void;
    isHttpUrl(variableName: string, value: any): void;
    isUri(variableName: string, value: any): void;
    assert(condition: boolean, message: string): void;
    typeAssertionMessage(variableName: string, type: string, value: any): string;
};
