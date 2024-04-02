import Button from './Button';
import Input from './Input';
import styled from 'styled-components';
import LinkIcon from '../assets/icons/link.svg';

const Div = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0 90px 0;
`;

const Form = styled.form`
  position: relative;
`;

const StyledButton = styled(Button)`
  position: absolute;
  padding: 10px 16px;
  top: 50%;
  transform: translateY(-18px);
  right: 20px;
`;

const Icon = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-10.25px);
  z-index: 10;
`;

const StyledInput = styled(Input)`
  background-color: var(--white-color);
  width: 800px;
  height: 69px;
  border: 1px solid var(--primary-color);
  outline: none;
`;

const AddLink = () => {
  return (
    <Div>
      <Form>
        <Icon src={LinkIcon} alt="" />
        <StyledInput className="addLink_input" placeholder="링크를 추가해 보세요" />
        <StyledButton>추가하기</StyledButton>
      </Form>
    </Div>
  );
};

export default AddLink;
