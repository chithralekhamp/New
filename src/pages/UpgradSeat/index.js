import React from "react";

import {
  Stack,
  Row,
  Img,
  Column,
  List,
  Text,
  Line,
  RadioGroup,
  Radio,
  Button,
} from "components";

const UpgradSeatPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-nunitosans h-[900px] mx-[auto] relative w-[100%]">
        <Stack className="absolute bottom-[0] h-[2846px] w-[100%]">
          <Stack className="absolute h-[2846px] sm:pr-[1px] md:pr-[2px] pr-[5px] sm:py-[1px] md:py-[2px] py-[5px] right-[3%] sm:w-[100%] w-[97%]">
            <Stack className="absolute h-[2595px] left-[0] top-[2%] sm:w-[100%] w-[92%]">
              <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between left-[15%] sm:mx-[0] sm:px-[0] top-[38%] sm:w-[100%] w-[46%]">
                <Img
                  src="images/img_rectangle11.svg"
                  className="max-w-[100%] w-[20%]"
                  alt="RectangleEleven"
                />
                <Img
                  src="images/img_rectangle10.svg"
                  className="max-w-[100%] w-[20%]"
                  alt="RectangleTen"
                />
              </Row>
              <Stack className="absolute h-[2595px] sm:pb-[167px] md:pb-[216px] pb-[420px] w-[100%]">
                <Column
                  className="absolute bg-cover bg-no-repeat flex flex-col justify-start md:p-[111px] sm:p-[15px] p-[216px] w-[100%]"
                  style={{ backgroundImage: "url('images/img_group44.png')" }}
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mb-[142px] md:mb-[184px] mb-[357px] md:ml-[181px] ml-[351px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                    <Img
                      src="images/img_vector17.svg"
                      className="max-w-[100%] sm:w-[100%] w-[48%]"
                      alt="VectorSeventeen"
                    />
                    <Img
                      src="images/img_play.svg"
                      className="max-w-[100%] sm:ml-[2px] md:ml-[3px] ml-[7px] sm:w-[100%] w-[48%]"
                      alt="play"
                    />
                  </Row>
                </Column>
                <Column
                  className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[31%] sm:mx-[0] sm:p-[3px] md:p-[4px] p-[9px] top-[11%] sm:w-[100%] w-[13%]"
                  style={{ backgroundImage: "url('images/img_group43.svg')" }}
                >
                  <Column className="flex flex-col items-center justify-start sm:mb-[30px] md:mb-[39px] mb-[77px] mt-[147px] sm:mt-[58px] md:mt-[75px] sm:px-[0] w-[100%]">
                    <List
                      className="bg-white_A700 gap-[12px] sm:gap-[4px] md:gap-[6px] grid min-h-[auto] py-[12px] sm:py-[4px] md:py-[6px] rounded-radius8 w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] p-[4px] w-[100%]">
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <div className="bg-indigo_50 sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            1
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] p-[4px] w-[100%]">
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[9px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            2
                          </Text>
                        </Column>
                        <div className="bg-indigo_50 sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <div className="bg-indigo_50 sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] p-[4px] w-[100%]">
                        <div className="bg-indigo_50 sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            3
                          </Text>
                        </Column>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] p-[4px] w-[100%]">
                        <Stack className="bg-gradient4  h-[40px] sm:p-[2px] md:p-[3px] p-[6px] relative rounded-radius4 w-[16%]">
                          <Img
                            src="images/img_checkmark_18X18.svg"
                            className="absolute h-[18px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius225 w-[18px] sm:w-[7px] md:w-[9px]"
                            alt="checkmark"
                          />
                        </Stack>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            4
                          </Text>
                        </Column>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                      </Row>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly my-[0] p-[4px] w-[100%]">
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                          <Text
                            className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            5
                          </Text>
                        </Column>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                        <div className="bg-gradient3  sm:h-[16px] md:h-[21px] h-[40px] rounded-radius4 w-[16%]"></div>
                      </Row>
                    </List>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start mt-[16px] sm:mt-[6px] md:mt-[8px] sm:py-[3px] md:py-[4px] py-[8px] rounded-radius8 w-[100%]">
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start px-[4px] w-[100%]">
                        <Img
                          src="images/img_info.svg"
                          className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius225 w-[18px] sm:w-[7px] md:w-[9px]"
                          alt="info"
                        />
                        <Text
                          className="flex-grow font-semibold ml-[3px] mt-[1px] text-bluegray_400"
                          as="h5"
                          variant="h5"
                        >
                          Exit row
                        </Text>
                      </Row>
                      <List
                        className="sm:gap-[1px] md:gap-[2px] gap-[4px] grid min-h-[auto] mt-[4px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Column className="flex flex-col items-center sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[16%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              6
                            </Text>
                          </Column>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            7
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            8
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            9
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            10
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            11
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            12
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            13
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                      </List>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] px-[4px] w-[100%]">
                        <Img
                          src="images/img_info.svg"
                          className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius225 w-[18px] sm:w-[7px] md:w-[9px]"
                          alt="info One"
                        />
                        <Text
                          className="flex-grow font-semibold ml-[3px] text-bluegray_400"
                          as="h5"
                          variant="h5"
                        >
                          Exit row
                        </Text>
                      </Row>
                      <List
                        className="sm:gap-[1px] md:gap-[2px] gap-[4px] grid min-h-[auto] mt-[4px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            14
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            15
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            16
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            17
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            18
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                      </List>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] px-[4px] w-[100%]">
                        <Img
                          src="images/img_info.svg"
                          className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius225 w-[18px] sm:w-[7px] md:w-[9px]"
                          alt="info Two"
                        />
                        <Text
                          className="flex-grow font-semibold ml-[3px] text-bluegray_400"
                          as="h5"
                          variant="h5"
                        >
                          Exit row
                        </Text>
                      </Row>
                      <List
                        className="sm:gap-[1px] md:gap-[2px] gap-[4px] grid min-h-[auto] mt-[4px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            19
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            20
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            21
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            22
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            23
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            24
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            25
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            26
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            27
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            28
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                      </List>
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] px-[4px] w-[100%]">
                        <Img
                          src="images/img_info.svg"
                          className="flex-shrink-0 md:h-[10px] h-[18px] sm:h-[8px] max-w-[100%] rounded-radius225 w-[18px] sm:w-[7px] md:w-[9px]"
                          alt="info Three"
                        />
                        <Text
                          className="flex-grow font-semibold ml-[3px] text-bluegray_400"
                          as="h5"
                          variant="h5"
                        >
                          Exit row
                        </Text>
                      </Row>
                      <List
                        className="sm:gap-[1px] md:gap-[2px] gap-[4px] grid min-h-[auto] mt-[4px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            29
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            30
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            31
                          </Text>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            32
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between p-[4px] w-[100%]">
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <Text
                            className="font-normal leading-[normal] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[16%]"
                            as="h4"
                            variant="h4"
                          >
                            33
                          </Text>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-gradient  sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                          <div className="bg-indigo_50 sm:h-[13px] md:h-[17px] h-[32px] rounded-radius4 w-[12%]"></div>
                        </Row>
                      </List>
                    </Column>
                  </Column>
                </Column>
              </Stack>
            </Stack>
            <Stack className="absolute h-[96px] left-[0] md:p-[12px] p-[24px] sm:px-[15px] sm:py-[9px] top-[0] sm:w-[100%] w-[65%]">
              <Img
                src="images/img_menu.svg"
                className="absolute h-[32px] inset-y-[0] left-[25%] max-w-[100%] my-[auto] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                alt="menu"
              />
            </Stack>
          </Stack>
          <Column className="absolute bg-white_A700 flex flex-col items-center justify-start sm:mx-[0] sm:w-[100%] w-[38%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
              <Line className="bg-bluegray_100 sm:h-[360px] md:h-[465px] h-[900px] w-[1px]" />
              <Column className="flex flex-col items-center overflow-auto sm:px-[0] w-[100%]">
                <Row className="bg-bluegray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                    <Column className="bg-bluegray_900 flex flex-col sm:mx-[0] sm:p-[15px] p-[19px] md:p-[9px] sm:w-[100%] w-[45%]">
                      <Text
                        className="font-extrabold sm:ml-[1px] md:ml-[2px] ml-[5px] mt-[1px] text-gray_50 uppercase w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        SFO
                      </Text>
                      <Text
                        className="font-normal sm:ml-[1px] md:ml-[2px] ml-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-indigo_50 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        California, US
                      </Text>
                    </Column>
                    <Img
                      src="images/img_arrowright_white_A700.svg"
                      className="sm:h-[13px] md:h-[17px] h-[32px] max-w-[100%] rounded-radius4 sm:w-[12px] md:w-[16px] w-[32px]"
                      alt="arrowright"
                    />
                    <Column className="bg-bluegray_900 flex flex-col sm:mx-[0] sm:p-[15px] p-[19px] md:p-[9px] sm:w-[100%] w-[45%]">
                      <Text
                        className="font-extrabold sm:ml-[1px] md:ml-[2px] ml-[5px] mt-[1px] text-gray_50 uppercase w-[auto]"
                        as="h1"
                        variant="h1"
                      >
                        NRT
                      </Text>
                      <Text
                        className="font-normal sm:ml-[1px] md:ml-[2px] ml-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-indigo_50 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Tokyo, Japan
                      </Text>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                    <Line className="bg-bluegray_500 sm:h-[36px] md:h-[46px] h-[88px] w-[1px]" />
                    <Column className="bg-bluegray_900 flex flex-col sm:mx-[0] md:p-[11px] sm:p-[15px] p-[23px] sm:w-[100%] w-[50%]">
                      <Text
                        className="font-normal ml-[1px] not-italic text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        <span className="text-white_A700 text-[16px] font-nunitosans">
                          Feb
                        </span>
                        <span className="text-white_A700 text-[16px] font-nunitosans">
                          {" "}
                        </span>
                        <span className="text-white_A700 text-[16px] font-nunitosans">
                          25
                        </span>
                        <span className="text-bluegray_400 text-[16px] font-nunitosans">
                          {" "}
                          |{" "}
                        </span>
                        <span className="text-white_A700 text-[16px] font-nunitosans">
                          7:00AM
                        </span>
                      </Text>
                      <Text
                        className="font-normal ml-[1px] mt-[4px] not-italic text-indigo_50 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Departing
                      </Text>
                    </Column>
                    <Line className="bg-bluegray_500 sm:h-[36px] md:h-[46px] h-[88px] w-[1px]" />
                    <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                      <Column className="bg-indigo_A200 flex flex-col justify-end md:pt-[11px] sm:pt-[15px] pt-[23px] md:px-[11px] sm:px-[15px] px-[23px] w-[100%]">
                        <Text
                          className="font-normal ml-[1px] not-italic text-white_A700 w-[auto]"
                          as="h3"
                          variant="h3"
                        >
                          <span className="text-white_A700 text-[16px] font-nunitosans">
                            Mar 21
                          </span>
                          <span className="text-bluegray_400 text-[16px] font-nunitosans">
                            {" "}
                            |{" "}
                          </span>
                          <span className="text-white_A700 text-[16px] font-nunitosans">
                            12:15PM
                          </span>
                        </Text>
                        <Text
                          className="font-normal ml-[1px] mt-[4px] not-italic text-indigo_50 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Arriving
                        </Text>
                        <Img
                          src="images/img_chevron.svg"
                          className="max-w-[100%] sm:ml-[28px] md:ml-[37px] ml-[72px] md:mt-[11px] mt-[23px] sm:mt-[9px] w-[13%]"
                          alt="chevron"
                        />
                      </Column>
                    </Column>
                  </Row>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:p-[3px] md:p-[4px] p-[8px] w-[100%]">
                  <Column className="flex flex-col items-center justify-center ml-[10px] md:ml-[5px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] rounded-radius8 sm:w-[100%] w-[49%]">
                    <Img
                      src="images/img_economyseats_2.svg"
                      className="max-w-[100%] md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]"
                      alt="EconomySeats"
                    />
                    <Column className="flex flex-col justify-start md:mb-[12px] mb-[24px] sm:mb-[9px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Economy
                        </Text>
                        <Text
                          className="bg-gradient  font-bold ml-[16px] sm:ml-[6px] md:ml-[8px] sm:px-[2px] md:px-[3px] px-[6px] py-[2px] rounded-radius4 text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Selected
                        </Text>
                      </Row>
                      <Text
                        className="font-normal leading-[normal] mt-[14px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_400 w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        Rest and recharge during your flight with extended leg
                        room, personalized service, and a multi-course meal
                        service
                      </Text>
                      <div className="bg-indigo_A200_87 sm:h-[2px] md:h-[3px] h-[4px] mt-[16px] sm:mt-[6px] md:mt-[8px] w-[12%]"></div>
                      <RadioGroup
                        className="ml-[4px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[98%]"
                        name="radiogroupbulletsofkey"
                      >
                        <Radio
                          value="Builtinentertainmentsystem"
                          className="font-normal sm:mr-[15px] md:mr-[20px] mr-[40px] not-italic text-[14px] text-bluegray_500"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroupbulletsofkey"
                          label="Builtin entertainment system"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="Complimentarysnacksanddrinks"
                          className="font-normal mr-[16px] sm:mr-[6px] md:mr-[8px] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-[14px] text-bluegray_500"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroupbulletsofkey"
                          label="Complimentary snacks and drinks"
                          size="sm"
                        ></Radio>
                        <Radio
                          value="Onefreecarryonandpersonalitem"
                          className="font-normal mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic text-[14px] text-bluegray_500 w-[100%]"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="radiogroupbulletsofkey"
                          label="One free carryon and personal item"
                          size="sm"
                        ></Radio>
                      </RadioGroup>
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-center sm:mb-[27px] md:mb-[36px] mb-[70px] ml-[4px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] rounded-radius8 sm:w-[100%] w-[49%]">
                    <Img
                      src="images/img_businessseats_2.svg"
                      className="max-w-[100%] md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]"
                      alt="BusinessSeats"
                    />
                    <Column className="flex flex-col justify-start md:mb-[12px] mb-[24px] sm:mb-[9px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                      <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                        <Text
                          className="font-semibold text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Business class
                        </Text>
                      </Column>
                      <Text
                        className="font-normal leading-[normal] mt-[18px] sm:mt-[7px] md:mt-[9px] not-italic text-bluegray_400 w-[100%]"
                        as="h4"
                        variant="h4"
                      >
                        Rest and recharge during your flight with extended leg
                        room, personalized service, and a multi-course meal
                        service
                      </Text>
                      <div className="bg-green_A200_87 sm:h-[2px] md:h-[3px] h-[4px] mt-[16px] sm:mt-[6px] md:mt-[8px] w-[12%]"></div>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="checkmark One"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[4px] md:ml-[6px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Extended leg room
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="checkmark Two"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[4px] md:ml-[6px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          First two checked bags free
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="checkmark Three"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[4px] md:ml-[6px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Priority boarding
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[4px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="checkmark Four"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[4px] md:ml-[6px] mt-[2px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Personalized service
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[4px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="checkmark Five"
                        />
                        <Text
                          className="flex-grow font-normal ml-[12px] sm:ml-[4px] md:ml-[6px] mt-[2px] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Enhanced food and drink service
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[4px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                        <Img
                          src="images/img_checkmark.svg"
                          className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="checkmark Six"
                        />
                        <Text
                          className="flex-grow font-normal leading-[normal] ml-[12px] md:ml-[6px] sm:mx-[0] not-italic text-bluegray_500"
                          as="h4"
                          variant="h4"
                        >
                          Seats that recline 40% more than economy
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Column className="bg-gray_52 flex flex-col items-center justify-start w-[100%]">
                  <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center p-[16px] md:p-[8px] sm:px-[15px] sm:py-[6px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Column className="flex flex-col sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[55%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Passenger 1
                        </Text>
                        <Text
                          className="font-semibold my-[4px] text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Sofia Knowles
                        </Text>
                      </Column>
                      <Column className="flex flex-col ml-[16px] md:ml-[8px] sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] sm:w-[100%] w-[41%]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Seat number
                        </Text>
                        <Text
                          className="font-semibold sm:my-[1px] md:my-[2px] my-[5px] text-bluegray_500 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          4A
                        </Text>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center ml-[16px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <Button
                        className="cursor-pointer font-normal min-w-[46%] not-italic text-[16px] text-center text-indigo_A200 w-[max-content]"
                        shape="RoundedBorder4"
                        size="lg"
                        variant="OutlineIndigoA200"
                      >
                        Save and close
                      </Button>
                      <Button
                        className="cursor-pointer font-normal min-w-[50%] ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-[16px] text-center text-gray_50 w-[max-content]"
                        shape="RoundedBorder4"
                        variant="FillIndigoA200"
                      >
                        Payment method
                      </Button>
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </Stack>
        <Column className="absolute bg-white_A700 border border-bluegray_100 border-solid flex flex-col inset-x-[0] justify-start max-w-[548px] mx-[auto] sm:p-[15px] md:p-[20px] p-[40px] sm:pl-[15px] sm:pr-[15px] rounded-radius12 shadow-bs1 top-[31%] w-[100%]">
          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
            <Text
              className="font-bold text-bluegray_500 w-[auto]"
              as="h1"
              variant="h1"
            >
              Upgrade seat
            </Text>
          </Column>
          <Text
            className="font-normal leading-[normal] mt-[12px] sm:mt-[4px] md:mt-[6px] not-italic text-bluegray_400 w-[100%]"
            as="h2"
            variant="h2"
          >
            Upgrade your seat for only $199, and enjoy 45 percent more leg room,
            and seats that recline 40 percent more than economy.
          </Text>
          <Column className="flex flex-col items-end justify-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:pl-[15px] pl-[172px] md:pl-[88px] sm:pr-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:px-[0] w-[100%]">
              <Button
                className="cursor-pointer font-normal min-w-[33%] not-italic text-[18px] text-center text-indigo_A200 w-[max-content]"
                shape="RoundedBorder4"
                variant="OutlineIndigoA200"
              >
                Cancel
              </Button>
              <Button
                className="cursor-pointer font-normal min-w-[63%] ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic text-[18px] text-center text-gray_50 w-[max-content]"
                shape="RoundedBorder4"
                variant="FillIndigoA200"
              >
                Upgrade for $199
              </Button>
            </Row>
          </Column>
        </Column>
      </Stack>
    </>
  );
};

export default UpgradSeatPage;
