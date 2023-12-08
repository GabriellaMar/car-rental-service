import styled from 'styled-components';
import { MdOutlineClose } from "react-icons/md";



export const NavMenuWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  padding: 45px 12px;
  width: 200px;
  height: 330px;
  background: #25252feb;
  z-index: 10;
  border-radius: 4px;
`;


export const IconWrapper = styled(MdOutlineClose )`
position: absolute;
top: 7px;
right: 10px;
display: flex;
justify-content: flex-end;
color: #d4d2d2;
cursor: pointer;
`
