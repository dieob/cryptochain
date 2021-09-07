const Block = require('./block');
const { GENESIS_DATA } = require('./config');

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

    describe('genesis()', ()=>{
        const genesisBlock = Block.genesis();
        it('returns a block instance', ()=> {
            expect(genesisBlock instanceof Block).toBe(true);
        });

        it('returns the genesis data', ()=> {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        })
    })
});