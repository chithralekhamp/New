import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Img,
  Line,
  Input,
  Stack,
  List,
} from "components";

const BookRetuuringFlighPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-[auto] sm:pt-[1px] md:pt-[2px] pt-[5px] w-[100%]">
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
          <Column className="flex flex-col items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[28px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1556px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                <Row className="bg-cyan_52 border border-solid border-teal_700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[1px] sm:mx-[0] sm:p-[15px] p-[16px] md:p-[8px] rounded-radius8 sm:w-[100%] w-[94%]">
                  <Text
                    className="flex-grow font-normal not-italic text-teal_700"
                    as="h3"
                    variant="h3"
                  >
                    Your flight has been booked successfully! Your confirmation
                    number is #381029404387
                  </Text>
                  <Img
                    src="images/img_close_2.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[4px] sm:w-[12px] md:w-[16px] w-[32px]"
                    alt="close"
                  />
                </Row>
                <Text
                  className="font-bold ml-[1px] sm:mt-[16px] md:mt-[21px] mt-[41px] text-indigo_A200 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Bon voyage, Sophia!
                </Text>
                <Text
                  className="font-semibold ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[28px] text-bluegray_500 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Confirmation number: #381029404387
                </Text>
                <Text
                  className="font-normal leading-[normal] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  <span className="text-bluegray_400 text-[18px] font-nunitosans">
                    Thank you for booking your travel with AeolusFlights! Below
                    is a summary of your trip to Narita airport in Tokyo, Japan.
                    We’ve sent a copy of your booking confirmation to your email
                    address. You can also find this page again in{" "}
                  </span>
                  <span className="text-indigo_A200 text-[18px] font-nunitosans">
                    My trips
                  </span>
                  <span className="text-bluegray_400 text-[18px] font-nunitosans">
                    .
                  </span>
                </Text>
                <Text
                  className="font-bold ml-[1px] sm:mt-[18px] md:mt-[24px] mt-[47px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Flight summary
                </Text>
                <Text
                  className="font-semibold ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[28px] text-bluegray_500 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Departing February 25th, 2021
                </Text>
                <Row className="bg-white_A700 border border-bluegray_100 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[11px] sm:mt-[4px] md:mt-[5px] p-[4px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_image25.png"
                    className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[4px] md:ml-[6px] sm:w-[15px] md:w-[20px] w-[40px]"
                    alt="imageTwentyFive"
                  />
                  <Column className="flex flex-col items-center md:ml-[4px] ml-[8px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[91%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        16h 45m
                      </Text>
                      <Text
                        className="font-normal ml-[104px] sm:ml-[41px] md:ml-[53px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        7:00AM - 4:15PM
                      </Text>
                      <Text
                        className="font-normal ml-[132px] sm:ml-[52px] md:ml-[68px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        1 stop
                      </Text>
                      <Text
                        className="font-normal ml-[130px] sm:ml-[51px] md:ml-[67px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        $624
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Hawaiian Airlines
                      </Text>
                      <Text
                        className="font-normal sm:ml-[16px] md:ml-[21px] ml-[42px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        value
                      </Text>
                      <Text
                        className="font-normal ml-[156px] sm:ml-[62px] md:ml-[80px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        2h 45m in HNL
                      </Text>
                      <Text
                        className="font-normal sm:ml-[39px] md:ml-[51px] ml-[99px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        round trip
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="font-normal ml-[1px] mt-[11px] sm:mt-[4px] md:mt-[5px] not-italic text-bluegray_400 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Seat 9F (economy, window), 1 checked bag
                </Text>
                <Text
                  className="font-semibold ml-[1px] sm:mt-[17px] md:mt-[22px] mt-[44px] text-bluegray_500 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Arriving March 21st, 2021{" "}
                </Text>
                <Row className="bg-white_A700 border border-bluegray_100 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[14px] mt-[28px] p-[4px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_image25.png"
                    className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[4px] md:ml-[6px] sm:w-[15px] md:w-[20px] w-[40px]"
                    alt="imageTwentyFive One"
                  />
                  <Column className="flex flex-col items-center md:ml-[4px] ml-[8px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[91%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-normal not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        16h 45m
                      </Text>
                      <Text
                        className="font-normal ml-[104px] sm:ml-[41px] md:ml-[53px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        7:00AM - 4:15PM
                      </Text>
                      <Text
                        className="font-normal ml-[132px] sm:ml-[52px] md:ml-[68px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        1 stop
                      </Text>
                      <Text
                        className="font-normal ml-[130px] sm:ml-[51px] md:ml-[67px] not-italic text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        $624
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Text
                        className="font-normal not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Hawaiian Airlines
                      </Text>
                      <Text
                        className="font-normal sm:ml-[16px] md:ml-[21px] ml-[42px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        value
                      </Text>
                      <Text
                        className="font-normal ml-[156px] sm:ml-[62px] md:ml-[80px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        2h 45m in HNL
                      </Text>
                      <Text
                        className="font-normal sm:ml-[39px] md:ml-[51px] ml-[99px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        round trip
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Text
                  className="font-normal ml-[1px] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Seat 4F (business, window), 1 checked bag
                </Text>
                <Text
                  className="font-bold ml-[1px] sm:mt-[17px] md:mt-[22px] mt-[43px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Price breakdown
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Departing Flight
                  </Text>
                  <Text
                    className="font-normal md:ml-[101px] ml-[197px] sm:ml-[78px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $251.50
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[18px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Arriving Flight
                  </Text>
                  <Text
                    className="font-normal md:ml-[110px] ml-[214px] sm:ml-[85px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $251.50
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Baggage fees
                  </Text>
                  <Text
                    className="font-normal sm:ml-[106px] md:ml-[137px] ml-[267px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $0
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Seat upgrade (business)
                  </Text>
                  <Text
                    className="font-normal ml-[161px] sm:ml-[64px] md:ml-[83px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $199
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Subtotal
                  </Text>
                  <Text
                    className="font-normal sm:ml-[114px] md:ml-[147px] ml-[286px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $702
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Text
                    className="font-normal not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Taxes (9.4%)
                  </Text>
                  <Text
                    className="font-normal sm:ml-[104px] md:ml-[135px] ml-[262px] not-italic text-bluegray_500 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    $66
                  </Text>
                </Row>
                <Column className="flex flex-col items-center justify-start ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[12px] sm:mt-[4px] md:mt-[6px] w-[100%]">
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Amount paid
                    </Text>
                    <Text
                      className="font-semibold text-bluegray_800 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      $768
                    </Text>
                  </Row>
                  <Line className="bg-bluegray_100 h-[1px] mt-[12px] sm:mt-[4px] md:mt-[6px] w-[100%]" />
                </Column>
                <Text
                  className="font-bold ml-[1px] sm:mt-[25px] md:mt-[33px] mt-[65px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Payment method
                </Text>
                <Column className="bg-gradient4  flex flex-col items-center justify-start ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] rounded-radius16 sm:w-[100%] w-[40%]">
                  <Column className="flex flex-col justify-start my-[3px] sm:px-[0] w-[100%]">
                    <Img
                      src="images/img_g4158.svg"
                      className="max-w-[100%] w-[31%]"
                      alt="g4158"
                    />
                    <Text
                      className="font-semibold sm:mt-[22px] md:mt-[29px] mt-[57px] text-gray_51 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Sophia Knowles
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[3px] md:mt-[4px] mt-[8px] w-[100%]">
                      <Text
                        className="font-semibold mb-[1px] text-gray_51 md:tracking-ls1 sm:tracking-ls1 tracking-ls2 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        <span className="text-gray_51 text-[16px] font-roboto font-medium">
                          ••••••••••••
                        </span>
                        <span className="text-gray_51 text-[16px] tracking-ls1 font-nunitosans">
                          3456
                        </span>
                      </Text>
                      <Text
                        className="font-semibold text-gray_51 tracking-ls1 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        10/23
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <Text
                  className="font-bold ml-[1px] sm:mt-[26px] md:mt-[34px] mt-[66px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Share your travel itinerary
                </Text>
                <Text
                  className="font-normal mt-[14px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_400 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  You can email your itinerary to anyone by entering their email
                  address here.
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="md:mt-[9px] ml-[1px] mt-[18px] sm:mt-[7px] sm:mx-[0] sm:w-[100%] w-[53%]"
                  type="email"
                  name="basetextin"
                  placeholder="Email address"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="md:mt-[17px] ml-[1px] mt-[33px] sm:mt-[13px] sm:mx-[0] sm:w-[100%] w-[53%]"
                  type="email"
                  name="basetextin One"
                  placeholder="Email address"
                ></Input>
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="md:mt-[12px] ml-[1px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:w-[100%] w-[53%]"
                  type="email"
                  name="basetextin Two"
                  placeholder="Email address"
                ></Input>
                <Stack className="h-[53px] ml-[1px] sm:mt-[11px] md:mt-[14px] mt-[28px] relative w-[21%]">
                  <Column className="absolute bg-indigo_A200 flex flex-col items-center justify-start p-[11px] sm:p-[4px] md:p-[5px] rounded-radius4 top-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_50 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Email itinerary
                    </Text>
                  </Column>
                  <Column className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] sm:mx-[0] p-[11px] md:p-[5px] sm:px-[0] sm:py-[4px] rounded-radius4 sm:w-[100%] w-[85%]">
                    <Text
                      className="font-normal mb-[4px] not-italic text-indigo_A200 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Add another
                    </Text>
                  </Column>
                </Stack>
                <Text
                  className="font-bold ml-[1px] sm:mt-[28px] md:mt-[36px] mt-[71px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Flight Route
                </Text>
                <div className="sm:mt-[30px] md:mt-[39px] mt-[76px] overflow-x-auto w-[100%]">
                  <Stack className="bg-indigo_50 border border-bluegray_100 border-solid h-[400px] sm:pt-[2px] md:pt-[3px] pt-[7px] relative rounded-radius4 w-[100%]">
                    <Img
                      src="images/img_vector16.svg"
                      className="absolute h-[23px] max-w-[100%] right-[30%] top-[38%] w-[31%]"
                      alt="VectorSixteen"
                    />
                    <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap h-[max-content] inset-y-[0] items-center justify-between my-[auto] sm:px-[0] w-[100%]">
                      <Column className="bg-gradient1  flex flex-col sm:mx-[0] md:p-[46px] p-[91px] sm:px-[15px] sm:py-[36px] sm:w-[100%] w-[50%]">
                        <div className="bg-white_A700 border border-deep_purple_900 border-solid sm:h-[3px] md:h-[4px] h-[6px] sm:ml-[232px] md:ml-[300px] ml-[582px] sm:mt-[28px] md:mt-[37px] mt-[72px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[6px]"></div>
                        <Text
                          className="font-bold mb-[120px] sm:mb-[47px] md:mb-[61px] sm:ml-[233px] md:ml-[301px] ml-[585px] text-deep_purple_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          NRT
                        </Text>
                      </Column>
                      <Column className="bg-gradient2  flex flex-col sm:mx-[0] md:p-[4px] p-[9px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[50%]">
                        <Img
                          src="images/img_airplane_25X27.svg"
                          className="max-w-[100%] sm:mr-[298px] md:mr-[386px] mr-[748px] mt-[123px] sm:mt-[49px] md:mt-[63px] w-[4%]"
                          alt="airplane"
                        />
                        <div className="bg-white_A700 border border-deep_purple_900 border-solid sm:h-[3px] md:h-[4px] h-[6px] sm:ml-[35px] md:ml-[45px] ml-[89px] sm:mr-[271px] md:mr-[350px] mr-[680px] mt-[1px] rounded-radius50 sm:w-[2px] md:w-[3px] w-[6px]"></div>
                        <Text
                          className="font-bold md:mb-[107px] mb-[208px] sm:mb-[83px] sm:ml-[25px] md:ml-[33px] ml-[65px] sm:mr-[274px] md:mr-[354px] mr-[686px] text-deep_purple_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          SFO
                        </Text>
                      </Column>
                    </Row>
                  </Stack>
                </div>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                <Text
                  className="font-bold text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    Shop{" "}
                  </span>
                  <span className="text-indigo_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    hotels
                  </span>
                </Text>
                <Text
                  className="font-normal leading-[normal] not-italic text-bluegray_400 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  AeolusFlights partners with thousands of hotels to get you the
                  best deal. Save up to 30% when you add a hotel to your trip.
                </Text>
                <List
                  className="sm:gap-[18px] md:gap-[23px] gap-[46px] grid min-h-[auto] sm:mt-[15px] md:mt-[19px] mt-[38px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                    <Img
                      src="images/img_image_247X400.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Ryokan Japan
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $439
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Enjoy views of the garden from your room
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                    <Img
                      src="images/img_image_9.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Bessho SASA
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $529
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[2px] md:ml-[3px] ml-[7px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Japanese ryokan with private onsen bath
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                    <Img
                      src="images/img_image_5.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Two"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-normal font-notosansjp not-italic text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans font-semibold">
                            HOTEL THE FLAG
                          </span>
                          <span className="text-bluegray_500 text-[18px]">
                            {" "}
                            大阪市
                          </span>
                        </Text>
                        <Text
                          className="font-nunitosans font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $139
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] my-[3px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Modern hotel in the heart of Osaka
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                    <Img
                      src="images/img_image_6.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Three"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          9 Hours Shinjuku
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $59
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        A convenient capsule hotel at Shinjuku station
                      </Text>
                    </Column>
                  </Column>
                </List>
                <Button
                  className="cursor-pointer font-normal min-w-[41%] md:ml-[122px] ml-[238px] sm:ml-[95px] sm:mt-[11px] md:mt-[15px] mt-[30px] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="OutlineIndigoA200"
                >
                  Shop all hotels
                </Button>
                <Text
                  className="font-bold sm:mt-[15px] md:mt-[19px] mt-[38px] text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    Find unique{" "}
                  </span>
                  <span className="text-indigo_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    experiences
                  </span>
                </Text>
                <Text
                  className="font-normal leading-[normal] md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic text-bluegray_400 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Find events and authentic cultrual experiences available
                  exclusively to Tripma users.
                </Text>
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[32px] grid min-h-[auto] sm:mt-[26px] md:mt-[34px] mt-[66px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                    <Img
                      src="images/img_image_10.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Four"
                    />
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Nihon Kimono
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $89
                        </Text>
                      </Row>
                      <Text
                        className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Wear the national dress of Japan around the city
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                    <Img
                      src="images/img_image_11.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Five"
                    />
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          teamLab Borderless
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $39
                        </Text>
                      </Row>
                      <Text
                        className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        A modern sensory experience of light and sound
                      </Text>
                    </Column>
                  </Column>
                </List>
                <Button
                  className="cursor-pointer font-normal min-w-[52%] md:ml-[100px] ml-[194px] sm:ml-[77px] sm:mt-[15px] md:mt-[20px] mt-[40px] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="OutlineIndigoA200"
                >
                  View all experiences
                </Button>
              </Column>
            </Row>
            <footer className="bg-white_A700 sm:mt-[3px] md:mt-[4px] mt-[8px] w-[100%]">
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
                      alt="facebook"
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

export default BookRetuuringFlighPage;
