import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Input,
  Img,
  Line,
  SelectBox,
  Stack,
  List,
} from "components";

const ReturningFlightsoptionsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-nunitosans items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
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
          <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] w-[100%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[872px] md:ml-[124px] ml-[auto] mr-[auto] sm:mx-[0] outline outline-[1px] outline-bluegray_100 sm:pl-[15px] sm:pr-[15px] rounded-radius4 shadow-bs2 w-[100%]">
              <Input
                className="font-normal not-italic p-[0] text-[18px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[20%]"
                name="basetextin"
                placeholder="SFO"
                prefix={
                  <Img
                    src="images/img_airplane.svg"
                    className="ml-[1px] mr-[8px] sm:mr-[3px] md:mr-[4px] rounded-radius4 my-[auto]"
                    alt="airplane"
                  />
                }
                variant="FillWhiteA700"
              ></Input>
              <Line className="bg-bluegray_100 sm:h-[20px] md:h-[25px] h-[48px] w-[1px]" />
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:p-[3px] md:p-[4px] p-[8px] rounded-radius4 sm:w-[100%] w-[20%]">
                <Img
                  src="images/img_airplane.svg"
                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] ml-[4px] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                  alt="airplane One"
                />
                <Text
                  className="flex-grow font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] sm:mr-[30px] md:mr-[39px] mr-[76px] not-italic text-bluegray_400"
                  as="h2"
                  variant="h2"
                >
                  NRT
                </Text>
              </Row>
              <Line className="bg-bluegray_100 sm:h-[20px] md:h-[25px] h-[48px] w-[1px]" />
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mx-[0] sm:p-[3px] md:p-[4px] p-[8px] rounded-radius4 sm:w-[100%] w-[29%]">
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
                wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[20%]"
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
                className="cursor-pointer font-normal min-w-[12%] not-italic text-[18px] text-center text-gray_50 w-[max-content]"
                shape="RoundedBorder4"
                variant="FillIndigoA200"
              >
                Search
              </Button>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[704px] md:ml-[124px] ml-[auto] mr-[auto] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <SelectBox
                className="font-normal sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[18%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch"
                placeholder="Max price"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[4px] sm:h-[8px] sm:w-[7px] md:mr-[6px] md:h-[10px] md:w-[9px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
                size="sm"
              ></SelectBox>
              <SelectBox
                className="font-normal ml-[16px] md:ml-[8px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[14%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch One"
                placeholder="Shops"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[4px] sm:h-[8px] sm:w-[7px] md:mr-[6px] md:h-[10px] md:w-[9px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
                size="sm"
              ></SelectBox>
              <SelectBox
                className="font-normal ml-[16px] md:ml-[8px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[14%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch Two"
                placeholder="Times"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[4px] sm:h-[8px] sm:w-[7px] md:mr-[6px] md:h-[10px] md:w-[9px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="font-normal ml-[16px] md:ml-[8px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[15%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch Three"
                placeholder="Airlines"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[4px] sm:h-[8px] sm:w-[7px] md:mr-[6px] md:h-[10px] md:w-[9px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="font-normal ml-[16px] md:ml-[8px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[18%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch Four"
                placeholder="Seat class"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_18_chevron_down.svg"
                    className="w-[18px] h-[18px] mr-[12px] sm:mr-[4px] sm:h-[8px] sm:w-[7px] md:mr-[6px] md:h-[10px] md:w-[9px] max-w-[100%] rounded-radius4"
                    alt="18 / chevron down"
                  />
                }
              ></SelectBox>
              <SelectBox
                className="font-normal ml-[16px] md:ml-[8px] sm:mx-[0] not-italic text-[16px] text-bluegray_900 sm:w-[100%] w-[13%]"
                placeholderClassName="text-bluegray_900"
                name="basepillch Five"
                placeholder="More"
                isSearchable={false}
                isMulti={false}
              ></SelectBox>
            </Row>
            <Text
              className="font-semibold md:ml-[124px] ml-[242px] sm:ml-[96px] sm:mt-[19px] md:mt-[24px] mt-[48px] text-bluegray_500 w-[auto]"
              as="h2"
              variant="h2"
            >
              <span className="text-bluegray_500 text-[18px] font-nunitosans">
                Choose a{" "}
              </span>
              <span className="text-indigo_A200 text-[18px] font-nunitosans">
                returning
              </span>
              <span className="text-bluegray_500 text-[18px] font-nunitosans">
                {" "}
                flight
              </span>
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1471px] md:ml-[124px] ml-[auto] mr-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                <Column className="border border-indigo_50 border-solid flex flex-col items-center justify-start pt-[16px] sm:pt-[6px] md:pt-[8px] sm:px-[15px] px-[16px] md:px-[8px] rounded-radius12 w-[100%]">
                  <Column className="bg-white_A700 border border-gray_51 border-solid flex flex-col items-center justify-start rounded-radius8 w-[100%]">
                    <div className="overflow-x-auto w-[100%]">
                      <Stack className="h-[440px] relative rounded-radius8 w-[100%]">
                        <div className="absolute bg-white_A700 border border-gray_51 border-solid sm:h-[183px] md:h-[236px] h-[456px] inset-[0] justify-center m-[auto] rounded-radius8 w-[100%]"></div>
                        <Column className="absolute flex flex-col items-center justify-start top-[0] w-[100%]">
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Img
                              src="images/img_image25.png"
                              className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[4px] md:ml-[6px] sm:w-[15px] md:w-[20px] w-[40px]"
                              alt="imageTwentyFive"
                            />
                            <Column className="flex flex-col items-center md:ml-[4px] ml-[8px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  16h 45m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[49px] md:ml-[64px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  7:00AM - 4:15PM
                                </Text>
                                <Text
                                  className="font-normal ml-[174px] sm:ml-[69px] md:ml-[89px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1 stop
                                </Text>
                                <Text
                                  className="font-normal ml-[151px] sm:ml-[60px] md:ml-[77px] not-italic text-bluegray_900 w-[auto]"
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
                                  className="font-normal sm:ml-[120px] md:ml-[155px] ml-[301px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  2h 45m in HNL
                                </Text>
                                <Text
                                  className="font-normal ml-[120px] sm:ml-[47px] md:ml-[61px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Stack className="h-[32px] ml-[12px] sm:ml-[4px] md:ml-[6px] relative w-[5%]">
                              <Img
                                src="images/img_image27.png"
                                className="absolute h-[32px] max-w-[100%] w-[100%]"
                                alt="imageTwentySeven"
                              />
                            </Stack>
                            <Column className="flex flex-col items-center md:ml-[4px] ml-[8px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  18h 22m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[49px] md:ml-[64px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  7:35 AM - 12:15 PM
                                </Text>
                                <Text
                                  className="font-normal ml-[156px] sm:ml-[62px] md:ml-[80px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1 stop
                                </Text>
                                <Text
                                  className="font-normal ml-[151px] sm:ml-[60px] md:ml-[77px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  $663
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Japan Airlines
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[139px] md:ml-[180px] ml-[350px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  50m in HKG
                                </Text>
                                <Text
                                  className="font-normal ml-[120px] sm:ml-[47px] md:ml-[61px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Img
                              src="images/img_image25.png"
                              className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[4px] md:ml-[6px] sm:w-[15px] md:w-[20px] w-[40px]"
                              alt="imageTwentyFive One"
                            />
                            <Column className="flex flex-col items-center md:ml-[4px] ml-[8px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  18h 04m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[49px] md:ml-[64px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  8:20 AM - 2:15 PM
                                </Text>
                                <Text
                                  className="font-normal ml-[166px] sm:ml-[66px] md:ml-[85px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1 stop
                                </Text>
                                <Text
                                  className="font-normal ml-[151px] sm:ml-[60px] md:ml-[77px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  $690
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
                                  className="font-normal sm:ml-[120px] md:ml-[155px] ml-[302px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1h 50m in PVG
                                </Text>
                                <Text
                                  className="font-normal ml-[120px] sm:ml-[47px] md:ml-[61px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Img
                              src="images/img_download.svg"
                              className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] ml-[12px] sm:ml-[4px] md:ml-[6px] sm:w-[15px] md:w-[20px] w-[40px]"
                              alt="download"
                            />
                            <Column className="flex flex-col items-center md:ml-[4px] ml-[8px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  18h 52m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[49px] md:ml-[64px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  9:47 AM - 4:15 PM
                                </Text>
                                <Text
                                  className="font-normal ml-[166px] sm:ml-[66px] md:ml-[85px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  1 stop
                                </Text>
                                <Text
                                  className="font-normal ml-[151px] sm:ml-[60px] md:ml-[77px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  $756
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Delta
                                </Text>
                                <Text
                                  className="font-normal sm:ml-[157px] md:ml-[203px] ml-[394px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  4h 05m in ICN
                                </Text>
                                <Text
                                  className="font-normal ml-[120px] sm:ml-[47px] md:ml-[61px] not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[4px] rounded-radius4 w-[100%]">
                            <Stack className="h-[40px] ml-[12px] sm:ml-[4px] md:ml-[6px] p-[4px] relative sm:w-[15px] md:w-[20px] w-[40px]">
                              <Img
                                src="images/img_image29.png"
                                className="absolute h-[32px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[12px] md:w-[16px] w-[32px]"
                                alt="imageTwentyNine"
                              />
                            </Stack>
                            <Column className="flex flex-col items-center md:ml-[4px] ml-[8px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  16h 05m
                                </Text>
                                <Text
                                  className="font-normal ml-[125px] sm:ml-[49px] md:ml-[64px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  11:15 AM - 7:45 PM
                                </Text>
                                <Text
                                  className="font-normal ml-[139px] sm:ml-[55px] md:ml-[71px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Nonstop
                                </Text>
                                <Text
                                  className="font-normal ml-[151px] sm:ml-[60px] md:ml-[77px] not-italic text-bluegray_900 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  $837
                                </Text>
                              </Row>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  Hawaiian Airlines
                                </Text>
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  as="h3"
                                  variant="h3"
                                >
                                  round trip
                                </Text>
                              </Row>
                            </Column>
                          </Row>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start py-[4px] w-[100%]">
                            <Line className="bg-indigo_50 h-[1px] w-[100%]" />
                          </Column>
                        </Column>
                        <Row className="absolute bg-white_A700 bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap items-end pt-[4px] px-[4px] rounded-radius4 w-[100%]">
                          <Stack className="h-[14px] ml-[13px] sm:ml-[5px] md:ml-[6px] mt-[17px] sm:mt-[6px] md:mt-[8px] relative w-[5%]">
                            <Img
                              src="images/img_image28.png"
                              className="absolute h-[14px] max-w-[100%] w-[100%]"
                              alt="imageTwentyEight"
                            />
                          </Stack>
                          <Column className="flex flex-col items-center justify-end md:ml-[3px] ml-[7px] sm:mx-[0] p-[1px] sm:px-[0] sm:w-[100%] w-[92%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[2px] md:mt-[3px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                              <Text
                                className="font-normal not-italic text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                15h 45m
                              </Text>
                              <Text
                                className="font-normal ml-[125px] sm:ml-[49px] md:ml-[64px] not-italic text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                10:55 AM - 8:15 PM
                              </Text>
                              <Text
                                className="font-normal ml-[139px] sm:ml-[55px] md:ml-[71px] not-italic text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                Nonstop
                              </Text>
                              <Text
                                className="font-normal ml-[151px] sm:ml-[60px] md:ml-[77px] not-italic text-bluegray_900 w-[auto]"
                                as="h3"
                                variant="h3"
                              >
                                $839
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Stack>
                    </div>
                  </Column>
                </Column>
                <Button
                  className="cursor-pointer font-normal min-w-[20%] md:mt-[12px] mt-[24px] sm:mt-[9px] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="OutlineIndigoA200"
                >
                  Show all flights
                </Button>
              </Column>
              <Column className="flex flex-col items-end justify-start md:ml-[102px] ml-[199px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                <Column className="flex flex-col items-end justify-start w-[100%]">
                  <Column className="bg-white_A700 border border-indigo_50 border-solid flex flex-col items-center justify-start sm:p-[15px] p-[16px] md:p-[8px] rounded-radius12 w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] w-[100%]">
                      <Img
                        src="images/img_image25.png"
                        className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                        alt="imageTwentyFive Two"
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
                    <Column className="flex flex-col items-center md:ml-[20px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                      <Text
                        className="font-semibold text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        $503
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[3px] md:mt-[4px] mt-[8px] text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        $121
                      </Text>
                      <Text
                        className="font-semibold sm:mt-[3px] md:mt-[4px] mt-[8px] text-bluegray_900 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        $624
                      </Text>
                    </Column>
                  </Row>
                </Column>
                <Button
                  className="cursor-pointer font-normal min-w-[41%] sm:mt-[12px] md:mt-[16px] mt-[32px] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                  shape="RoundedBorder4"
                  variant="OutlineIndigoA200"
                >
                  Save and close
                </Button>
              </Column>
            </Row>
            <div className="md:ml-[124px] ml-[242px] sm:mt-[19px] md:mt-[24px] mt-[48px] sm:mx-[0] overflow-x-auto sm:px-[0] sm:w-[100%] w-[46%]">
              <Stack className="bg-indigo_50 border border-bluegray_100 border-solid h-[171px] relative rounded-radius4 w-[100%]">
                <Img
                  src="images/img_vector16.svg"
                  className="absolute bottom-[41%] h-[23px] left-[34%] max-w-[100%] w-[27%]"
                  alt="VectorSixteen"
                />
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center justify-between sm:px-[0] rounded-radius4 w-[100%]">
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
                      alt="airplane Two"
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
            <List
              className="gap-[16px] sm:gap-[6px] md:gap-[8px] grid max-w-[1654px] min-h-[auto] sm:ml-[60px] md:ml-[78px] ml-[auto] mr-[auto] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
              orientation="vertical"
            >
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:p-[15px] md:p-[20px] p-[40px] sm:w-[100%] w-[99%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Text
                    className="font-bold text-bluegray_500 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      Find{" "}
                    </span>
                    <span className="text-indigo_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      places to stay
                    </span>
                    <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      {" "}
                      in Japan
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
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] pb-[1px] rounded-radius12 shadow-bs sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_397X473.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Hotel Kaneyamaen and Bessho SASA
                        </Text>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] md:ml-[4px] ml-[8px] mt-[4px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[97%]"
                        as="h3"
                        variant="h3"
                      >
                        Located at the base of Mount Fuji, Hotel Kaneyamaen is a
                        traitional japanese ryokan with a modern twist. Enjoy a
                        private onsen bath and a private multi-course kaiseki
                        dinner.
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center md:ml-[20px] ml-[40px] sm:mx-[0] rounded-radius12 shadow-bs sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_5.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-indigo_A200 text-[18px] font-nunitosans">
                            HOTEL THE FLAG{" "}
                          </span>
                          <span className="text-indigo_A200 text-[18px] font-notosansjp font-normal not-italic">
                            大阪市
                          </span>
                        </Text>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] md:ml-[4px] ml-[8px] mt-[4px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[97%]"
                        as="h3"
                        variant="h3"
                      >
                        Make a stop in Osaka and stay at HOTEL THE FLAG, just a
                        few minutes walk to experience the food culture
                        surrounding Dontonbori. Just one minute away is the
                        Shinsaibashi shopping street.
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center md:ml-[20px] ml-[40px] sm:mx-[0] pb-[1px] rounded-radius12 shadow-bs sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_6.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Two"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          9 Hours Shinjuku
                        </Text>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] md:ml-[4px] ml-[8px] mt-[4px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[97%]"
                        as="h3"
                        variant="h3"
                      >
                        Experience a truly unique stay in an authentic Japanese
                        capsule hotel. 9 Hours Shinjuku is minutes from one of
                        Japan’s busiest train stations. Just take the NEX train
                        from Narita airport!
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
              <Line className="self-center w-[53%] sm:w-[100%] sm:mx-[0] outline-bluegray_100 outline-[1px] outline bg-white_A700 shadow-bs2 items-center flex-row flex rounded-radius4" />
              <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:p-[15px] md:p-[20px] p-[40px] sm:w-[100%] w-[99%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Text
                    className="font-bold text-bluegray_500 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      People in{" "}
                    </span>
                    <span className="text-indigo_A200 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      San Francisco
                    </span>
                    <span className="text-bluegray_500 text-[24px] font-nunitosans sm:text-[20px] md:text-[22px]">
                      {" "}
                      also searched for
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
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[24px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] rounded-radius12 shadow-bs sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Shanghai, China
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
                        An international city rich in culture
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center md:ml-[20px] ml-[40px] sm:mx-[0] rounded-radius12 shadow-bs sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_7.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image One One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Text
                          className="font-semibold text-indigo_A200 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Nairobi, Kenya
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
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Dubbed the Safari Capital of the World
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center md:ml-[20px] ml-[40px] sm:mx-[0] rounded-radius12 shadow-bs sm:w-[100%] w-[32%]">
                    <Img
                      src="images/img_image_8.png"
                      className="max-w-[100%] rounded-tl-[12px] rounded-tr-[12px] w-[100%]"
                      alt="image Two One"
                    />
                    <Column className="bg-white_A700 flex flex-col justify-start sm:p-[15px] p-[16px] md:p-[8px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          <span className="text-bluegray_500 text-[18px] font-nunitosans">
                            Seoul,
                          </span>
                          <span className="text-indigo_A200 text-[18px] font-nunitosans">
                            {" "}
                            South Korea
                          </span>
                        </Text>
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $589
                        </Text>
                      </Row>
                      <Text
                        className="font-normal sm:ml-[3px] md:ml-[4px] ml-[8px] mt-[4px] not-italic text-bluegray_400 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        This modern city is a traveler’s dream
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
            </List>
            <footer className="bg-white_A700 md:mt-[12px] mt-[25px] sm:mt-[9px] w-[100%]">
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

export default ReturningFlightsoptionsPage;
