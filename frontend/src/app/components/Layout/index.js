import {Layout} from 'antd'
import styled from 'styled-components'

export default styled(Layout)`
    padding: 25px 0;
    background: ${(props) => props.color ? props.color : '#fff'}
`;
