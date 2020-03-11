import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }
  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background: #7159c1;
          color: #ffffff;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
      }
    }
  }
`;

export const Select = styled.select`
  display: block;
  margin: 30px auto;
  border: none;
  background: #7159c1;
  height: 40px;
  width: 100px;
  color: #ffffff;
  font-weight: bold;
  text-align-last: center;
`;

export const Footer = styled.footer`
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: block;
    margin: 30px auto;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 10px solid #dcdfe8;
    background: #ffffff;
    transition: all 0.3s ease-out;

    &:hover {
      border: none;
      background: #7519c1;
      width: 40px;
      height: 40px;
      transition: all 0.3s ease-in;
    }
  }

  span {
    font-weight: 600;
    font-size: 16px;
    color: #666;
  }
`;
