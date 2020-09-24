import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  margin: 30px auto;
  justify-content: center;
  align-items: flex-start;
`;

export const Product = styled.div`
  background: #fff;
  width: 300px;
  height: 510px;
  border-radius: 6px;
  padding: 10px;
  margin: 10px;

  .img-div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 200px;
      padding: 10px;
    }
  }

  .description-div {
    display: flex;
    flex-direction: column;
    padding: 12px;

    strong {
      font-weight: bold;
      font-size: 16px;
      color: #161621;
    }
    p {
      font-size: 11px;
      margin-top: 5px;
      color: #161621;
    }
    border-bottom: 1px solid #999999;
  }

  .pricing-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 12px;

    span {
      font-size: 12px;
      color: #161621;
      padding: 2px;
    }

    strong {
      align-self: center;
      font-size: 40px;
      color: #161621;
      margin-top: 10px;
      padding: 12px;

      border: 1px solid #161621;
      border-radius: 6px;
    }
  }
`;

export const CheckoutInfo = styled.div`
  background: #fff;
  width: 600px;
  border-radius: 6px;
  padding: 10px;
  margin: 10px;

  h1 {
    font-size: 25px;
    color: #161621;
    padding: 5px;
  }

  button {
    height: 40px;
    border: none;
    background: #161621;
    border-radius: 6px;
    margin: 5px;
    padding: 5px;
    align-items: center;

    span {
      color: #fff;
      font-weight: bold;
      font-size: 16px;
    }
  }

  .form-area {
    height: 100%;
    padding: 10px;
    margin: 5px;

    display: flex;
    flex-direction: column;

    .person-info {
      border: 1px solid #161621;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;

      label {
        display: block;
        margin: 5px;
        span {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.8);
          padding: 5px;
        }
        input {
          display: block;
          padding: 8px;
          margin: 2px;
          height: 30px;
          color: #9999;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 4px;

          &:focus {
            color: #161621;
          }
        }
      }

      .name-area {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        input {
          width: 250px;
        }
      }

      .elseinfo-area {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        input {
          width: 250px;
        }
      }
    }

    .shipping-info {
      border: 1px solid #161621;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;

      label {
        display: block;
        margin: 5px;
        span {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.8);
          padding: 5px;
        }
        input {
          display: block;
          padding: 8px;
          margin: 2px;
          height: 30px;
          color: #9999;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 4px;

          &:focus {
            color: #161621;
          }
        }
      }
      .address-lines {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        input {
          width: 250px;
        }
      }

      .elseshipping-info {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        input {
          width: 119px;
        }
      }
    }
  }
`;

export const PaymentArea = styled.div`
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #161621;
  border-radius: 6px;

  h1 {
    padding: 5px;
    margin: 10px;
  }

  div {
    margin: 10px;
    padding: 5px;
  }
`;
