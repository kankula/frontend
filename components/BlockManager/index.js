import Hero from "../blocks/Hero";
import AllGame from "../blocks/Allgame";
import TestAllGame from "../blocks/TestAllGame";
const getBlockComponent = ({ __component, ...rest }, index) => {
    let Block;

    switch (__component) {

        case 'blocks.hero':
            Block = Hero;
            break;

        case 'blocks.allgame':
            Block = AllGame;
            break;

        case 'blocks.test-allgame':
            Block = TestAllGame;
            break;

    }

    return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
    // console.log(blocks)

    return <div>{blocks.map(getBlockComponent)}</div>;
};


export default BlockManager;