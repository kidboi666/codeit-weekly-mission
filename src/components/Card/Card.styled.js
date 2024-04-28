import styled from 'styled-components';

export const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s;
`;

export const CardDescriptionContainer = styled.div`
  padding: 15px 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardLayout = styled.li`
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover ${CardImg} {
    transform: scale(1.3);
  }

  &:hover ${CardDescriptionContainer} {
    background-color: var(--gray5-color);
  }
`;

export const CardLinkContainer = styled.a`
  display: grid;
  grid-template-rows: 200px 134px;
  height: 100%;

  @media (max-width: 767px) {
    grid-template-rows: 192px 135px;
  }
`;

export const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #dddfff;
`;

export const BlankImgBox = styled.div`
  width: 200px;
`;

export const CreatedDate = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 13px;
  color: #666;
`;

export const Title = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 24px;
`;

export const TimeStamp = styled.p`
  font-size: 14px;
  color: #666666;
`;
