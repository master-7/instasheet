// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {colors} from 'data/StyledConst'
import TrashIcon from 'react-icons/lib/fa/trash'

type Image = {
    src: string
}

type Props = {
    images: Array<Image>,
    onRemove: Function
}
export default class Cards extends PureComponent {
    static defaultProps = {
        onRemove: () => {}
    };

    props: Props;

    render() {
        const {images, onRemove} = this.props;
        return <List>
            {images.map((image: Image) => <Card key={image.src} >
                <Img src={image.src} alt="" />
                <CardCover>
                    <TrashIcon
                        width={32}
                        height={32}
                        style={{
                            cursor: 'pointer'
                        }}
                        onClick={() => onRemove(image)}
                    />
                </CardCover>
            </Card>)}
        </List>
    }
}

const Img = styled.img`
    width: 20vw;
    height: 20vw;
    
    @media screen and (max-width: 800px) {
        width:35vw;
        height:35vw;
    }
    
    @media screen and (max-width: 500px) {
        width:80vw;
        height:80vw;
    }
`;

const CardCover = styled.div.attrs({
    'data-cover': true
})`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
    justify-content: center;
    align-items: center;
    color: ${colors.white}
`;

const Card = styled.li`
    display: flex;
    margin-right: 28px;
    margin-bottom: 28px;
    position: relative;
    user-select: none;
    
    [data-cover] {
        display: none;
    }
    
    :hover [data-cover] {
        display: flex;
    }
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: center;
`;
