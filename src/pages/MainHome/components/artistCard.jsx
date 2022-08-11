import styled, { css } from "styled-components";
import Button from "../../../duckku-ui/Button";
import Typography from "../../../duckku-ui/Typography";
import { HiOutlineChevronRight } from "react-icons/hi";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// 카드 전체 component
const CardWrapper = styled.div`
  width: 326px;
  height: 484px;
  margin-bottom: 29px;
  background: url(${(props) => (props.imgLink ? props.imgLink : "")}) no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 상단 아티스트 이름과 로고를 감쌀 component
const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

// 하단 버튼을 감쌀 component
const ButtomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-bottom: 21px;
`;

// 아티스트 이름 component
const ArtistNameBox = styled.div`
  width: fit-content;
  height: 34px;
  margin-top: 16px;
  margin-left: 16px;
  padding-left: 13px;
  padding-right: 13px;
  border-radius: 10px;
  background: linear-gradient(98.1deg, #ff9b7b 8.9%, #ffc6b4 85.16%);
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

// 아티스트 로고 component
const ArtistLogoBox = styled.div`
  width: 36px;
  height: 36px;
  margin-top: 16px;
  margin-left: 8px;
  border-radius: 50%;
  background: white url(${(props) => (props.iconLink ? props.iconLink : "")})
    no-repeat;
  background-size: 24px;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin-left: 7px;
`;

// 버튼의 경우 Figma 기준으로 blur와 투명도가 들어갔으나, 해당 option이 없어 미구현
const ArtistCard = (props) => {
  return (
    <Wrapper>
      <CardWrapper imgLink={props.imgLink}>
        <TopWrapper>
          <ArtistNameBox>
            <Typography bold16 color="white">
              RedVelvet
            </Typography>
          </ArtistNameBox>
          <ArtistLogoBox iconLink={props.iconLink} />
        </TopWrapper>
        <ButtomWrapper>
          <Button width="150" height="44">
            <Flex>
              <Typography bold16 color="white">
                앨범함 가기
              </Typography>
              <HiOutlineChevronRight size="20" />
            </Flex>
          </Button>
        </ButtomWrapper>
      </CardWrapper>
    </Wrapper>
  );
};

export default ArtistCard;
