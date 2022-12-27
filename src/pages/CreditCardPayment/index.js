import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Img,
  Input,
  Line,
  CheckBox,
} from "components";
import { useGoogleLogin } from "@react-oauth/google";

const CreditCardPaymentPage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-nunitosans items-center justify-end mx-[auto] pt-[10px] sm:pt-[3px] md:pt-[5px] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <header className="max-w-[1866px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:pl-[13px] sm:pl-[15px] pl-[27px] md:py-[13px] sm:py-[15px] py-[27px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%] common-row-list">
                <ul className="flex flex-row items-center justify-between">
                  <li className="w-[11%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex my-[3px]">
                    <Column className="flex flex-col items-center justify-start p-[10px] sm:p-[3px] md:p-[5px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                        rel="noreferrer"
                      >
                        Flights
                      </a>
                    </Column>
                  </li>
                  <li className="w-[11%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex my-[3px]">
                    <Column className="flex flex-col items-center justify-start p-[10px] sm:p-[3px] md:p-[5px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                        rel="noreferrer"
                      >
                        Hotels
                      </a>
                    </Column>
                  </li>
                  <li className="w-[14%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex my-[3px]">
                    <Column className="flex flex-col items-center justify-start p-[10px] sm:p-[3px] md:p-[5px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                        rel="noreferrer"
                      >
                        Packages
                      </a>
                    </Column>
                  </li>
                  <li className="w-[11%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex my-[3px]">
                    <Column className="flex flex-col items-center justify-start p-[10px] sm:p-[3px] md:p-[5px]">
                      <a
                        href={"javascript:"}
                        className="cursor-pointer font-normal not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                        rel="noreferrer"
                      >
                        Sign in
                      </a>
                    </Column>
                  </li>
                  <li className="w-[max-content] sm:w-[100%] sm:my-[10px] min-w-[15%] text-center">
                    <Button
                      className="cursor-pointer font-normal not-italic text-[16px] text-center text-gray_50"
                      shape="RoundedBorder4"
                      variant="FillIndigoA200"
                    >
                      Sign up
                    </Button>
                  </li>
                  <li className="w-[6%] sm:w-[100%] sm:my-[10px] rounded-radius50 my-[4px]">
                    <Img
                      src="images/img_headeravatar.png"
                      className="sm:h-[16px] md:h-[21px] h-[40px] rounded-radius50"
                      alt="HeaderAvatar"
                    />
                  </li>
                </ul>
              </Row>
            </Row>
          </header>
          <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] w-[100%]">
            <Column className="flex flex-col justify-start max-w-[1555px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-bold text-indigo_A200 w-[auto]"
                as="h1"
                variant="h1"
              >
                Payment method
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[16px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                  <Text
                    className="font-normal leading-[normal] not-italic text-bluegray_400 w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    Select a payment method below. AeolusFlights processes your
                    payment securely with end-to-end encryption.
                  </Text>
                  <Row className="border border-indigo_A200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:mt-[12px] mt-[24px] sm:mt-[9px] rounded-radius4 w-[100%]">
                    <Button
                      className="flex items-center justify-center min-w-[23%] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_menu_18X18.svg"
                          className="mr-[4px] text-center"
                          alt="menu"
                        />
                      }
                      shape="RoundedBorder4"
                      variant="FillIndigoA200"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[18px] text-gray_50">
                        Credit card
                      </div>
                    </Button>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] p-[11px] md:p-[5px] sm:px-[0] sm:py-[4px] rounded-radius4 sm:w-[100%] w-[23%]">
                      <Img
                        src="images/img_18google.svg"
                        className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] w-[18px] sm:w-[7px] md:w-[9px]"
                        alt="18google"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] sm:mr-[3px] md:mr-[4px] mr-[8px] not-italic text-indigo_A200"
                        as="h2"
                        variant="h2"
                      >
                        Google Pay
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] p-[11px] md:p-[5px] sm:px-[0] sm:py-[4px] rounded-radius4 sm:w-[100%] w-[22%]">
                      <Img
                        src="images/img_fire.svg"
                        className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] rounded-radius4 w-[18px] sm:w-[7px] md:w-[9px]"
                        alt="fire"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] sm:mr-[3px] md:mr-[4px] mr-[8px] not-italic text-indigo_A200"
                        as="h2"
                        variant="h2"
                      >
                        Apple pay
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] p-[11px] md:p-[5px] sm:px-[0] sm:py-[4px] rounded-radius4 sm:w-[100%] w-[18%]">
                      <Img
                        src="images/img_megaphone.svg"
                        className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] w-[18px] sm:w-[7px] md:w-[9px]"
                        alt="megaphone"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] sm:mr-[3px] md:mr-[4px] mr-[8px] not-italic text-indigo_A200"
                        as="h2"
                        variant="h2"
                      >
                        Paypal
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] p-[11px] md:p-[5px] sm:px-[0] sm:py-[4px] rounded-radius4 sm:w-[100%] w-[18%]">
                      <Img
                        src="images/img_location.svg"
                        className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] w-[18px] sm:w-[7px] md:w-[9px]"
                        alt="location"
                      />
                      <Text
                        className="flex-grow font-normal ml-[4px] sm:mr-[3px] md:mr-[4px] mr-[8px] not-italic text-indigo_A200"
                        as="h2"
                        variant="h2"
                      >
                        Crypto
                      </Text>
                    </Row>
                  </Row>
                  <Text
                    className="font-semibold sm:mt-[15px] md:mt-[20px] mt-[40px] text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Credit card details
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[14px] mt-[28px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[45%]">
                    <Column className="border border-bluegray_500 border-solid flex flex-col h-[16px] sm:h-[7px] md:h-[9px] items-center px-[4px] rounded-radius2 w-[16px] sm:w-[6px] md:w-[8px]">
                      <div className="bg-indigo_A200 sm:h-[4px] md:h-[5px] h-[8px] rounded-radius1 sm:w-[3px] md:w-[4px] w-[8px]"></div>
                    </Column>
                    <Text
                      className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] my-[2px] not-italic text-bluegray_500 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Billing address is same as Passenger 1{" "}
                    </Text>
                  </Row>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:w-[100%] w-[70%]"
                    type="text"
                    name="basetextin"
                    placeholder="Name on card"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:w-[100%] w-[70%]"
                    type="number"
                    name="basetextin One"
                    placeholder="Card number"
                  ></Input>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                    <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                      <Input
                        className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                        wrapClassName="w-[100%]"
                        name="basetextin Two"
                        placeholder="Expiration date"
                      ></Input>
                      <Column className="flex flex-col justify-start mt-[4px] p-[2px] rounded-radius4 w-[100%]">
                        <Text
                          className="font-normal ml-[2px] not-italic text-bluegray_400 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          MM/YY
                        </Text>
                      </Column>
                    </Column>
                    <Input
                      className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                      wrapClassName="flex mb-[24px] md:mb-[12px] md:ml-[12px] ml-[24px] sm:mb-[9px] sm:mx-[0] sm:w-[100%] w-[45%]"
                      name="basetextin Three"
                      placeholder="CCV"
                      suffix={
                        <Img
                          src="images/img_info_32X32.svg"
                          className="ml-[35px] mr-[1px] sm:ml-[13px] md:ml-[18px] rounded-radius4 my-[auto]"
                          alt="info"
                        />
                      }
                    ></Input>
                  </Row>
                </Column>
                <Column className="flex flex-col items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                  <Column className="bg-white_A700 border border-indigo_50 border-solid flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] w-[100%]">
                      <Img
                        src="images/img_image25.png"
                        className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                        alt="imageTwentyFive"
                      />
                      <Column className="flex flex-col justify-start md:ml-[4px] ml-[8px] sm:mx-[0] pb-[3px] pr-[3px] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Hawaiian Airlines
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          FIG4312
                        </Text>
                      </Column>
                      <Column className="flex flex-col justify-start md:ml-[4px] ml-[8px] sm:mx-[0] pb-[3px] pl-[3px] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-normal sm:ml-[14px] md:ml-[19px] ml-[37px] not-italic text-bluegray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          16h 45m (+1d)
                        </Text>
                        <Text
                          className="font-normal sm:ml-[2px] md:ml-[3px] ml-[7px] mt-[4px] not-italic text-bluegray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          7:00 AM - 4:15 PM
                        </Text>
                        <Text
                          className="font-normal sm:ml-[13px] md:ml-[17px] ml-[34px] sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          2h 45m in HNL
                        </Text>
                      </Column>
                    </Row>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] py-[4px] w-[100%]">
                      <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[3px] md:mt-[4px] mt-[8px] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] w-[100%]">
                      <Img
                        src="images/img_image25.png"
                        className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                        alt="imageTwentyFive One"
                      />
                      <Column className="flex flex-col justify-start md:ml-[4px] ml-[8px] sm:mx-[0] pb-[3px] pr-[3px] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-normal not-italic text-bluegray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          Hawaiian Airlines
                        </Text>
                        <Text
                          className="font-normal sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          FIG4312
                        </Text>
                      </Column>
                      <Column className="flex flex-col justify-start md:ml-[4px] ml-[8px] sm:mx-[0] pb-[3px] pl-[3px] sm:px-[0] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-normal sm:ml-[14px] md:ml-[19px] ml-[37px] not-italic text-bluegray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          16h 45m (+1d)
                        </Text>
                        <Text
                          className="font-normal sm:ml-[2px] md:ml-[3px] ml-[7px] mt-[4px] not-italic text-bluegray_900 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          7:00 AM - 4:15 PM
                        </Text>
                        <Text
                          className="font-normal sm:ml-[13px] md:ml-[17px] ml-[34px] sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          2h 45m in HNL
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] p-[4px] sm:px-[0] sm:w-[100%] w-[78%]">
                    <Column className="flex flex-col items-center justify-start mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Seat upgrade
                      </Text>
                    </Column>
                    <Text
                      className="font-normal sm:ml-[15px] md:ml-[20px] ml-[40px] mr-[12px] sm:mr-[4px] md:mr-[6px] mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      $199
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[auto] sm:mx-[0] p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] sm:w-[100%] w-[58%]">
                    <Column className="flex flex-col items-end sm:mx-[0] pb-[3px] pl-[3px] sm:px-[0] sm:w-[100%] w-[61%]">
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Subtotal
                      </Text>
                      <Text
                        className="font-semibold mt-[11px] sm:mt-[4px] md:mt-[5px] text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Taxes and Fees
                      </Text>
                      <Text
                        className="font-semibold mt-[11px] sm:mt-[4px] md:mt-[5px] text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Total
                      </Text>
                    </Column>
                    <Column className="flex flex-col md:ml-[20px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        $702
                      </Text>
                      <Text
                        className="font-semibold ml-[10px] sm:ml-[3px] md:ml-[5px] sm:mt-[3px] md:mt-[4px] mt-[8px] text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        $66
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[3px] md:mt-[4px] mt-[8px] text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        $768
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Text
                  className="font-semibold sm:mt-[12px] md:mt-[16px] mt-[31px] text-bluegray_500 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Create an account
                </Text>
                <Button
                  className="cursor-pointer font-normal mb-[3px] min-w-[12%] not-italic text-[18px] text-bluegray_400 text-center w-[max-content]"
                  shape="RoundedBorder4"
                  variant="OutlineBluegray400"
                >
                  Confirm and pay
                </Button>
              </Row>
              <Text
                className="font-normal leading-[normal] md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[44%]"
                as="h3"
                variant="h3"
              >
                Tripma is free to use as a guest, but if you create an account
                today, you can save and view flights, manage your trips, earn
                rewards, and more.
              </Text>
              <CheckBox
                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[28px] not-italic sm:pl-[3px] md:pl-[4px] pl-[8px] text-[16px] text-bluegray_500"
                inputClassName="h-[16px] mr-[5px] w-[16px]"
                name="label Eleven"
                label="Save card and create account for later"
                size="lg"
              ></CheckBox>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="md:mt-[16px] mt-[31px] sm:mt-[12px] sm:mx-[0] sm:w-[100%] w-[31%]"
                type="email"
                name="basetextin Four"
                placeholder="Email address or phone number"
              ></Input>
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:w-[100%] w-[31%]"
                type="password"
                name="basetextin Five"
                placeholder="Password"
              ></Input>
              <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[10px] sm:p-[3px] md:p-[5px] w-[100%]">
                  <Line className="bg-bluegray_100 h-[1px] my-[12px] sm:my-[4px] md:my-[6px] sm:w-[100%] w-[46%]" />
                  <Text
                    className="font-normal my-[3px] not-italic text-bluegray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    or
                  </Text>
                  <Line className="bg-bluegray_100 h-[1px] my-[12px] sm:my-[4px] md:my-[6px] sm:w-[100%] w-[46%]" />
                </Row>
                <Row
                  className="common-pointer border border-indigo_A200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] p-[11px] sm:p-[4px] md:p-[5px] rounded-radius4 w-[100%]"
                  onClick={googleSignIn}
                >
                  <Img
                    src="images/img_google.svg"
                    className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] w-[18px] sm:w-[7px] md:w-[9px]"
                    alt="google"
                  />
                  <Text
                    className="flex-grow font-normal ml-[123px] sm:ml-[49px] md:ml-[63px] not-italic text-indigo_A200"
                    as="h2"
                    variant="h2"
                  >
                    Sign up with Google
                  </Text>
                </Row>
                <Row className="border border-indigo_A200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] p-[11px] sm:p-[4px] md:p-[5px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_user_18X18.svg"
                    className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] rounded-radius4 w-[18px] sm:w-[7px] md:w-[9px]"
                    alt="user"
                  />
                  <Text
                    className="flex-grow font-normal ml-[122px] sm:ml-[48px] md:ml-[62px] not-italic text-indigo_A200"
                    as="h2"
                    variant="h2"
                  >
                    Continue with Apple
                  </Text>
                </Row>
                <Row className="border border-indigo_A200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[12px] sm:mt-[4px] md:mt-[6px] p-[11px] sm:p-[4px] md:p-[5px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_facebook_18X18.svg"
                    className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] sm:ml-[3px] md:ml-[4px] ml-[8px] w-[18px] sm:w-[7px] md:w-[9px]"
                    alt="facebook"
                  />
                  <Text
                    className="flex-grow font-normal mb-[4px] ml-[109px] sm:ml-[43px] md:ml-[56px] not-italic text-indigo_A200"
                    as="h2"
                    variant="h2"
                  >
                    Continue with Facebook
                  </Text>
                </Row>
              </Column>
              <Text
                className="font-semibold sm:mt-[19px] md:mt-[24px] mt-[48px] text-bluegray_500 w-[auto]"
                as="h2"
                variant="h2"
              >
                Cancellation policy
              </Text>
              <Text
                className="font-normal leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[44%]"
                as="h3"
                variant="h3"
              >
                <span className="text-bluegray_400 text-[16px] font-nunitosans">
                  This flight has a flexible cancellation policy. If you cancel
                  or change your flight up to 30 days before the departure date,
                  you are eligible for a free refund. All flights booked on
                  Tripma are backed by our satisfaction guarantee, however
                  cancellation policies vary by airline. See the
                </span>
                <span className="text-indigo_A200 text-[16px] font-nunitosans">
                  {" "}
                  full cancellation policy
                </span>
                <span className="text-bluegray_400 text-[16px] font-nunitosans">
                  {" "}
                  for this flight.
                </span>
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[22px] md:mt-[28px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                <Button
                  className="cursor-pointer font-normal min-w-[50%] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="OutlineIndigoA200"
                >
                  Back to seat select
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[45%] md:ml-[12px] ml-[24px] sm:ml-[9px] not-italic text-[18px] text-bluegray_400 text-center w-[max-content]"
                  shape="RoundedBorder4"
                  variant="OutlineBluegray400"
                >
                  Confirm and pay
                </Button>
              </Row>
            </Column>
            <footer className="bg-white_A700 mt-[104px] sm:mt-[41px] md:mt-[53px] w-[100%]">
              <Column className="flex flex-col items-center justify-start max-w-[1920px] ml-[auto] mr-[auto] my-[16px] sm:my-[6px] md:my-[8px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] w-[100%]">
                  <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] sm:pl-[0] sm:pr-[15px] pr-[16px] md:pr-[8px] py-[16px] sm:py-[6px] md:py-[8px] sm:w-[100%] w-[11%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[100%] sm:px-[0] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-bold mb-[4px] text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            About
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            About AeolusFlights
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            How it works
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Careers
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Press
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Blog
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Forum
                          </Text>
                        </Column>
                      </li>
                    </ul>
                  </Column>
                  <Column className="flex flex-col justify-start ml-[160px] md:ml-[82px] sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] sm:pl-[0] sm:pr-[15px] pr-[16px] md:pr-[8px] py-[16px] sm:py-[6px] md:py-[8px] sm:w-[100%] w-[12%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[100%] sm:px-[0] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-bold mb-[4px] text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Partner with us
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Partnership programs
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Affiliate program
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Connectivity partners
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Promotions and events
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Integrations
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Community
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Loyalty program
                          </Text>
                        </Column>
                      </li>
                    </ul>
                  </Column>
                  <Column className="flex flex-col justify-start ml-[160px] md:ml-[82px] sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] sm:pl-[0] sm:pr-[15px] pr-[16px] md:pr-[8px] py-[16px] sm:py-[6px] md:py-[8px] sm:w-[100%] w-[11%] common-column-list">
                    <ul className="flex flex-col">
                      <li className="w-[100%] sm:px-[0] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-bold text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Support
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Help Center
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Contact us
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Privacy policy
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Terms of service
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Trust and safety
                          </Text>
                        </Column>
                      </li>
                      <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                        <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Accessibility
                          </Text>
                        </Column>
                      </li>
                    </ul>
                  </Column>
                  <Column className="flex flex-col justify-start ml-[160px] md:ml-[82px] md:mr-[23px] mr-[46px] sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                    <Column className="flex flex-col justify-start sm:pr-[15px] pr-[16px] md:pr-[8px] py-[16px] sm:py-[6px] md:py-[8px] w-[100%] common-column-list">
                      <ul className="flex flex-col">
                        <li className="w-[100%] sm:px-[0] flex-col flex">
                          <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                            <Text
                              className="font-bold text-bluegray_500 w-[auto]"
                              as="h2"
                              variant="h2"
                            >
                              Get the app
                            </Text>
                          </Column>
                        </li>
                        <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                          <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              AeolusFlights for Android
                            </Text>
                          </Column>
                        </li>
                        <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                          <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              AeolusFlights for iOS
                            </Text>
                          </Column>
                        </li>
                        <li className="w-[100%] mt-[8px] sm:mt-[3px] sm:px-[0] md:mt-[4px] flex-col flex">
                          <Column className="cursor-pointer flex flex-col justify-start p-[4px]">
                            <Text
                              className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              Mobile site
                            </Text>
                          </Column>
                        </li>
                      </ul>
                    </Column>
                    <Column className="bg-black_900 border border-gray_500 border-solid flex flex-col items-center justify-start mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] p-[4px] rounded-radius4 sm:w-[100%] w-[54%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Img
                          src="images/img_eye.svg"
                          className="sm:h-[12px] md:h-[16px] h-[30px] max-w-[100%] mb-[1px] rounded-radius4 sm:w-[11px] md:w-[15px] w-[30px]"
                          alt="eye"
                        />
                        <Column className="flex flex-col justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                          <Img
                            src="images/img_car.svg"
                            className="max-w-[100%] ml-[1px] sm:w-[100%] w-[95%]"
                            alt="car"
                          />
                          <Img
                            src="images/img_signal.svg"
                            className="max-w-[100%] mt-[3px] w-[100%]"
                            alt="signal"
                          />
                        </Column>
                      </Row>
                    </Column>
                    <Img
                      src="images/img_linkgooglep.png"
                      className="max-w-[100%] mt-[12px] sm:mt-[4px] md:mt-[6px] sm:w-[100%] w-[54%]"
                      alt="linkgooglep"
                    />
                  </Column>
                </Row>
                <Column className="bg-white_A700 flex flex-col items-center justify-start mt-[17px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[17px] sm:mt-[6px] md:mt-[8px] p-[12px] sm:p-[4px] md:p-[6px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[108px] md:ml-[55px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[7%]">
                    <Img
                      src="images/img_twitter.svg"
                      className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="twitter"
                    />
                    <Img
                      src="images/img_instagram.svg"
                      className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:ml-[10px] ml-[20px] sm:ml-[7px] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="instagram"
                    />
                    <Img
                      src="images/img_facebook.svg"
                      className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:ml-[10px] ml-[20px] sm:ml-[7px] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="facebook One"
                    />
                  </Row>
                  <Text
                    className="font-normal mr-[108px] sm:mr-[43px] md:mr-[55px] not-italic text-bluegray_400 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    © 2023 AeolusFlights incorporated
                  </Text>
                </Row>
              </Column>
            </footer>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CreditCardPaymentPage;
