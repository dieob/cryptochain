const Block = require('./block');

describe('Block', () =>{
    const timestamp = 'date';
    const lastHash = 'lastHash';
    const hash = 'hash';
    const data = 'data';

    const block = new Block({timestamp, lastHash, hash, data});

    it('has a timestamp, lastHash, hash, data', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.hash).toEqual(hash);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.data).toEqual(data);
    })
});