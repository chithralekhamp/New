import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Stack,
  Img,
  Line,
  Input,
  List,
} from "components";

const FromDropdownPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-nunitosans items-center justify-end mx-[auto] w-[100%]">
        <header className="w-[100%]">
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:p-[12px] sm:p-[15px] p-[24px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap max-w-[585px] md:ml-[630px] ml-[auto] md:mr-[33px] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%] common-row-list">
              <ul className="flex flex-row items-center justify-center">
                <li className="w-[12%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-col flex my-[3px]">
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
                <li className="w-[12%] ml-[49px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[25px] flex-col flex my-[3px]">
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
                <li className="w-[16%] ml-[49px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[25px] flex-col flex my-[3px]">
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
                <li className="w-[12%] ml-[49px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[25px] flex-col flex my-[3px]">
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
                <li className="w-[max-content] ml-[49px] sm:ml-[19px] sm:w-[100%] sm:my-[10px] md:ml-[25px] min-w-[17%] text-center">
                  <Button
                    className="cursor-pointer font-normal not-italic text-[16px] text-center text-gray_50"
                    shape="RoundedBorder4"
                    variant="FillIndigoA200"
                  >
                    Sign up
                  </Button>
                </li>
              </ul>
            </Row>
          </Row>
        </header>
        <Column className="flex flex-col items-center justify-end w-[100%]">
          <Stack className="h-[706px] relative w-[100%]">
            <Img
              src="images/img_bgaeoflgt.png"
              className="absolute h-[705px] max-w-[100%] top-[0] w-[100%]"
              alt="BGAeoFlgt"
            />
            <Column className="absolute bottom-[1%] flex flex-col items-center justify-start md:p-[48px] p-[93px] sm:px-[15px] sm:py-[37px] w-[100%]">
              <Img
                src="images/img_herotextgradi.png"
                className="max-w-[100%] sm:w-[100%] w-[44%]"
                alt="HeroTextGradi"
              />
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mb-[152px] sm:mb-[60px] md:mb-[78px] sm:mt-[19px] md:mt-[24px] mt-[48px] sm:mx-[0] outline outline-[1px] outline-bluegray_100 rounded-radius4 shadow-bs1 sm:w-[100%] w-[70%]">
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                  <Column className="flex flex-col items-end justify-start w-[100%]">
                    <Row className="bg-white_A700 border-2 border-indigo_A200 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[3px] md:p-[4px] p-[8px] rounded-radius4 w-[100%]">
                      <Img
                        src="images/img_airplane.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                        alt="airplane"
                      />
                      <Text
                        className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] not-italic text-bluegray_400"
                        as="h2"
                        variant="h2"
                      >
                        From where?
                      </Text>
                    </Row>
                    <Column className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                      <Column className="border border-bluegray_100 border-solid flex flex-col items-center justify-start shadow-bs1 w-[100%]">
                        <Column className="bg-white_A700 flex flex-col items-center justify-end pt-[15px] sm:pt-[5px] md:pt-[7px] px-[15px] sm:px-[5px] md:px-[7px] w-[100%]">
                          <Text
                            className="bg-indigo_A200 font-normal mt-[1px] not-italic pl-[13px] sm:pl-[5px] md:pl-[6px] sm:pr-[15px] md:pr-[18px] pr-[35px] sm:pt-[2px] md:pt-[3px] pt-[7px] text-gray_51 w-[269px]"
                            as="h3"
                            variant="h3"
                          >
                            SFO
                          </Text>
                          <Column className="flex flex-col justify-end sm:mt-[22px] md:mt-[29px] mt-[57px] sm:pt-[2px] md:pt-[3px] pt-[7px] sm:px-[0] md:px-[3px] px-[7px] w-[100%]">
                            <Text
                              className="font-normal sm:ml-[1px] md:ml-[2px] ml-[5px] not-italic text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              ATL
                            </Text>
                          </Column>
                          <Column className="flex flex-col justify-end sm:mt-[38px] md:mt-[50px] mt-[97px] sm:pt-[2px] md:pt-[3px] pt-[7px] sm:px-[0] md:px-[3px] px-[7px] w-[100%]">
                            <Text
                              className="font-normal sm:ml-[1px] md:ml-[2px] ml-[5px] not-italic text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              LAX
                            </Text>
                          </Column>
                          <Column className="flex flex-col justify-end mt-[137px] sm:mt-[54px] md:mt-[70px] sm:pt-[2px] md:pt-[3px] pt-[7px] sm:px-[0] md:px-[3px] px-[7px] w-[100%]">
                            <Text
                              className="font-normal sm:ml-[1px] md:ml-[2px] ml-[5px] not-italic text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              STL
                            </Text>
                          </Column>
                          <Column className="flex flex-col justify-end mt-[177px] sm:mt-[70px] md:mt-[91px] sm:pt-[2px] md:pt-[3px] pt-[7px] sm:px-[0] md:px-[3px] px-[7px] w-[100%]">
                            <Text
                              className="font-normal sm:ml-[1px] md:ml-[2px] ml-[5px] not-italic text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              PVG
                            </Text>
                          </Column>
                          <Column className="flex flex-col justify-end md:mt-[112px] mt-[217px] sm:mt-[86px] sm:pt-[2px] md:pt-[3px] pt-[7px] sm:px-[0] md:px-[3px] px-[7px] w-[100%]">
                            <Text
                              className="font-normal sm:ml-[1px] md:ml-[2px] ml-[5px] not-italic text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              MSP
                            </Text>
                          </Column>
                          <Column className="flex flex-col justify-end sm:mt-[102px] md:mt-[132px] mt-[257px] sm:pt-[2px] md:pt-[3px] pt-[7px] sm:px-[0] md:px-[3px] px-[7px] w-[100%]">
                            <Text
                              className="font-normal sm:ml-[1px] md:ml-[2px] ml-[5px] not-italic text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              NRT
                            </Text>
                          </Column>
                          <Column className="flex flex-col justify-start sm:mt-[118px] md:mt-[153px] mt-[297px] pt-[4px] sm:px-[0] px-[4px] w-[100%]">
                            <Text
                              className="font-normal sm:ml-[2px] md:ml-[3px] ml-[7px] not-italic text-bluegray_900 w-[auto]"
                              as="h3"
                              variant="h3"
                            >
                              JFK
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Line className="bg-bluegray_100 sm:h-[20px] md:h-[25px] h-[48px] w-[1px]" />
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:p-[3px] md:p-[4px] p-[8px] rounded-radius4 sm:w-[100%] w-[27%]">
                  <Img
                    src="images/img_airplane.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                    alt="airplane One"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] mr-[179px] sm:mr-[71px] md:mr-[92px] not-italic text-bluegray_400"
                    as="h2"
                    variant="h2"
                  >
                    Where to?
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 sm:h-[20px] md:h-[25px] h-[48px] w-[1px]" />
                <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:p-[3px] md:p-[4px] p-[8px] rounded-radius4 sm:w-[100%] w-[21%]">
                  <Img
                    src="images/img_trash.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                    alt="trash"
                  />
                  <Text
                    className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] sm:mr-[25px] md:mr-[33px] mr-[64px] not-italic text-bluegray_400"
                    as="h2"
                    variant="h2"
                  >
                    Depart - Return
                  </Text>
                </Row>
                <Line className="bg-bluegray_100 sm:h-[20px] md:h-[25px] h-[48px] w-[1px]" />
                <Input
                  className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[17%]"
                  name="adultCounter"
                  placeholder="1 adult"
                  prefix={
                    <Img
                      src="images/img_user.svg"
                      className="ml-[1px] mr-[8px] sm:mr-[3px] md:mr-[4px] rounded-radius4 my-[auto]"
                      alt="user"
                    />
                  }
                  variant="FillWhiteA700"
                ></Input>
                <Button
                  className="cursor-pointer font-normal min-w-[8%] not-italic text-[18px] text-center text-gray_50 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="FillIndigoA200"
                >
                  Search
                </Button>
              </Row>
            </Column>
          </Stack>
          <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[23px] mt-[45px] w-[100%]">
            <Column className="flex flex-col items-center justify-end max-w-[1615px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:pt-[25px] md:pt-[33px] pt-[64px] sm:px-[15px] md:px-[33px] px-[64px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] sm:px-[0] w-[100%]">
                <Text
                  className="font-bold text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    Find your next adventure with these{" "}
                  </span>
                  <span className="text-indigo_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    flight deals
                  </span>
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                  <Text
                    className="flex-grow font-normal not-italic text-indigo_200"
                    as="h1"
                    variant="h1"
                  >
                    All
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] mt-[1px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                    alt="arrowright"
                  />
                </Row>
              </Row>
              <Column className="flex flex-col items-center justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] sm:px-[0] w-[100%]">
                <List
                  className="sm:gap-[15px] md:gap-[20px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                    <Img
                      src="images/img_image.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            The Bund,
                          </span>
                          <span className="text-[18px] font-nunitosans">
                            {" "}
                            Shanghai
                          </span>
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $598
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        China’s most international city
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                    <Img
                      src="images/img_image_397X570.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Two"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            Sydney Opera House,
                          </span>
                          <span className="text-[18px] font-nunitosans">
                            {" "}
                            Sydney
                          </span>
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $981
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Take a stroll along the famous harbor
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                    <Img
                      src="images/img_image_1.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Three"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            Kōdaiji Temple,
                          </span>
                          <span className="text-[18px] font-nunitosans">
                            {" "}
                            Kyoto
                          </span>
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $633
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Step back in time in the Gion district
                      </Text>
                    </Column>
                  </Column>
                </List>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] rounded-radius12 shadow-bs w-[100%]">
                  <Img
                    src="images/img_image_397X1792.png"
                    className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                    alt="image Four"
                  />
                  <Column className="bg-white_A700 flex flex-col justify-end p-[15px] sm:p-[5px] md:p-[7px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[9px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="text-bluegray_500 text-[18px] font-nunitosans">
                          Tsavo East National Park,{" "}
                        </span>
                        <span className="text-[18px] font-nunitosans">
                          Kenya
                        </span>
                      </Text>
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        $1,248
                      </Text>
                    </Row>
                    <Text
                      className="font-normal sm:ml-[3px] md:ml-[4px] ml-[9px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Named after the Tsavo River, and opened in April 1984,
                      Tsavo East National Park is one of the oldest parks in
                      Kenya. It is located in the semi-arid Taru Desert.
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start max-w-[1628px] ml-[auto] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[40px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                <Text
                  className="font-bold text-bluegray_500 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    Explore unique
                  </span>
                  <span className="text-green_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                    {" "}
                    places to stay
                  </span>
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                  <Text
                    className="flex-grow font-normal not-italic text-indigo_200"
                    as="h1"
                    variant="h1"
                  >
                    All
                  </Text>
                  <Img
                    src="images/img_arrowright.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] mt-[1px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                    alt="arrowright One"
                  />
                </Row>
              </Row>
              <List
                className="sm:gap-[15px] md:gap-[20px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:w-[100%] w-[97%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                  <Img
                    src="images/img_image_2.png"
                    className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                    alt="image Five"
                  />
                  <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="text-bluegray_500 text-[18px] font-nunitosans">
                          Stay among the atolls in{" "}
                        </span>
                        <span className="text-green_A200 text-[18px] font-nunitosans">
                          Maldives
                        </span>
                      </Text>
                    </Column>
                    <Text
                      className="font-normal leading-[normal] md:ml-[4px] ml-[8px] mt-[4px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[97%]"
                      as="h3"
                      variant="h3"
                    >
                      From the 2nd century AD, the islands were known as the
                      'Money Isles' due to the abundance of cowry shells, a
                      currency of the early ages.
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 shadow-bs w-[100%]">
                  <Img
                    src="images/img_image_3.png"
                    className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                    alt="image Six"
                  />
                  <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="text-bluegray_500 text-[18px] font-nunitosans">
                          Experience the Ourika Valley in{" "}
                        </span>
                        <span className="text-green_A200 text-[18px] font-nunitosans">
                          Morocco
                        </span>
                      </Text>
                    </Column>
                    <Text
                      className="font-normal leading-[normal] md:ml-[4px] ml-[8px] mt-[4px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[97%]"
                      as="h3"
                      variant="h3"
                    >
                      Morocco’s Hispano-Moorish architecture blends influences
                      from Berber culture, Spain, and contemporary artistic
                      currents in the Middle East.
                    </Text>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center justify-start md:pb-[11px] sm:pb-[15px] pb-[22px] rounded-radius12 shadow-bs w-[100%]">
                  <Img
                    src="images/img_image_4.png"
                    className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                    alt="image Seven"
                  />
                  <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                      <Text
                        className="font-semibold text-bluegray_500 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="text-bluegray_500 text-[18px] font-nunitosans">
                          Live traditionally in{" "}
                        </span>
                        <span className="text-green_A200 text-[18px] font-nunitosans">
                          Mongolia
                        </span>
                      </Text>
                    </Column>
                    <Text
                      className="font-normal leading-[normal] md:ml-[4px] ml-[8px] mt-[4px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[97%]"
                      as="h3"
                      variant="h3"
                    >
                      Traditional Mongolian yurts consists of an angled
                      latticework of wood or bamboo for walls, ribs, and a
                      wheel.
                    </Text>
                  </Column>
                </Column>
              </List>
            </Column>
            <Button
              className="cursor-pointer font-normal min-w-[11%] sm:mt-[15px] md:mt-[20px] mt-[40px] not-italic text-[18px] text-center text-gray_50 w-[max-content]"
              shape="RoundedBorder4"
              variant="FillIndigoA200"
            >
              Explore more stays
            </Button>
            <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] w-[100%]">
              <Column className="flex flex-col items-center justify-start md:p-[33px] p-[64px] sm:px-[15px] sm:py-[25px] w-[100%]">
                <Column className="flex flex-col justify-start max-w-[408px] ml-[auto] mr-[auto] sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[6px] sm:pl-[15px] sm:pr-[15px] md:pr-[3px] pr-[6px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold text-bluegray_500 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    What users are saying
                  </Text>
                </Column>
                <List
                  className="sm:gap-[15px] md:gap-[20px] gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 max-w-[1792px] mb-[10px] sm:mb-[3px] md:mb-[5px] min-h-[auto] ml-[auto] mr-[auto] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                  orientation="horizontal"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] w-[100%]">
                    <Img
                      src="images/img_avatar.png"
                      className="sm:h-[20px] md:h-[25px] h-[48px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[48px]"
                      alt="avatar"
                    />
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Yifei Chen
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            Seoul, South Korea{" "}
                          </span>
                          <span className="text-indigo_200 text-[18px] font-nunitosans">
                            |
                          </span>
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            {" "}
                            April 2019
                          </span>
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_59.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_60.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne One"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_61.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne Two"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_62.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne Three"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_63.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne Four"
                            />
                          </Column>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_900 w-[100%]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="text-bluegray_900 text-[18px] font-nunitosans">
                          What a great experience using AeolusFlights! I booked
                          all of my flights for my gap year through
                          AeolusFlights and never had any issues. When I had to
                          cancel a flight because of an emergency, AeolusFlights
                          support helped me{" "}
                        </span>
                        <span className="text-indigo_A200 text-[18px] font-nunitosans">
                          read more...
                        </span>
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] w-[100%]">
                    <Img
                      src="images/img_avatar_48X48.png"
                      className="sm:h-[20px] md:h-[25px] h-[48px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[48px]"
                      alt="avatar One"
                    />
                    <Column className="flex flex-col justify-start ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Kaori Yamaguchi
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            Honolulu, Hawaii{" "}
                          </span>
                          <span className="text-indigo_200 text-[18px] font-nunitosans">
                            |
                          </span>
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            {" "}
                            February 2017
                          </span>
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_64.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne One"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_65.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne One One"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_66.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne Two One"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_67.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne Three One"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <div className="bg-gradient  max-w-[100%] p-[2px] rounded-radius05 w-[100%] ">
                              <Img
                                src="images/img_star1_68.svg"
                                className="border-solid md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                                alt="StarOne Four One"
                              />
                            </div>
                          </Column>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_900 w-[100%]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="text-bluegray_900 text-[18px] font-nunitosans">
                          My family and I visit Hawaii every year, and we
                          usually book our flights using other services.
                          AeolusFlights was recommened to us by a long time
                          friend, and I’m so glad we tried it out! The process
                          was easy and{" "}
                        </span>
                        <span className="text-indigo_A200 text-[18px] font-nunitosans">
                          read more...
                        </span>
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] w-[100%]">
                    <Img
                      src="images/img_avatar_1.png"
                      className="sm:h-[20px] md:h-[25px] h-[48px] rounded-radius50 sm:w-[19px] md:w-[24px] w-[48px]"
                      alt="avatar Two"
                    />
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Anthony Lewis
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            Berlin, Germany{" "}
                          </span>
                          <span className="text-indigo_200 text-[18px] font-nunitosans">
                            |
                          </span>
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            {" "}
                            April 2019
                          </span>
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[3px] md:mt-[4px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_69.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne Two"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_70.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne One Two"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_71.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne Two Two"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_72.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne Three Two"
                            />
                          </Column>
                          <Column className="flex flex-col sm:h-[10px] md:h-[13px] h-[24px] items-center px-[3px] rounded-radius4 md:w-[12px] w-[24px] sm:w-[9px]">
                            <Img
                              src="images/img_star1_73.svg"
                              className="bg-gradient  md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius05 w-[18px] sm:w-[7px] md:w-[9px]"
                              alt="StarOne Four Two"
                            />
                          </Column>
                        </Row>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_900 w-[100%]"
                        as="h2"
                        variant="h2"
                      >
                        <span className="text-bluegray_900 text-[18px] font-nunitosans">
                          When I was looking to book my flight to Berlin from
                          LAX, AeolusFlights had the best browsing experiece so
                          I figured I’d give it a try. It was my first time
                          using AeolusFlights, but I’d definitely recommend it
                          to a friend and use it for{" "}
                        </span>
                        <span className="text-indigo_A200 text-[18px] font-nunitosans">
                          read more...
                        </span>
                      </Text>
                    </Column>
                  </Row>
                </List>
              </Column>
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] sm:py-[15px] py-[16px] md:py-[8px] w-[100%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] w-[100%]">
                    <List
                      className="gap-[160.5px] sm:gap-[64px] md:gap-[82px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 max-w-[941px] min-h-[auto] ml-[auto] mr-[auto] sm:mt-[14px] md:mt-[18px] mt-[36px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                      orientation="horizontal"
                    >
                      <Column className="flex flex-col justify-start sm:pl-[0] sm:pr-[15px] pr-[16px] md:pr-[8px] py-[16px] sm:py-[6px] md:py-[8px] w-[100%]">
                        <Column className="flex flex-col justify-start p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-bold mb-[4px] text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            About
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            About AeolusFlights
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            How it works
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Careers
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Press
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Blog
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Forum
                          </Text>
                        </Column>
                      </Column>
                      <Column className="flex flex-col justify-start sm:pl-[0] sm:pr-[15px] pr-[16px] md:pr-[8px] py-[16px] sm:py-[6px] md:py-[8px] w-[100%]">
                        <Column className="flex flex-col justify-start p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-bold mb-[4px] text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Partner with us
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Partnership programs
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Affiliate program
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Connectivity partners
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Promotions and events
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Integrations
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Community
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Loyalty program
                          </Text>
                        </Column>
                      </Column>
                      <Column className="flex flex-col justify-start sm:pl-[0] sm:pr-[15px] pr-[16px] md:pr-[8px] py-[16px] sm:py-[6px] md:py-[8px] w-[100%]">
                        <Column className="flex flex-col justify-start p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-bold text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Support
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Help Center
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Contact us
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Privacy policy
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Terms of service
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Trust and safety
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Accessibility
                          </Text>
                        </Column>
                      </Column>
                    </List>
                    <Column className="flex flex-col justify-start max-w-[250px] md:ml-[82px] ml-[auto] md:mr-[23px] mr-[auto] sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                      <Column className="flex flex-col justify-start sm:pr-[15px] pr-[16px] md:pr-[8px] py-[16px] sm:py-[6px] md:py-[8px] w-[100%]">
                        <Column className="flex flex-col justify-start p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-bold text-bluegray_500 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            Get the app
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            AeolusFlights for Android
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            AeolusFlights for iOS
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] p-[4px] sm:px-[0] w-[100%]">
                          <Text
                            className="font-normal mb-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            Mobile site
                          </Text>
                        </Column>
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
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[128px] md:ml-[55px] ml-[auto] mr-[auto] sm:mx-[0] md:p-[4px] p-[8px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] sm:py-[3px] w-[100%]">
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
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default FromDropdownPage;
