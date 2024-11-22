"use client";
import "@/assets/styles/form.scss";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import InputGroup from "../UI/InputGroup";
import ButtonSimple from "../UI/ButtonSimple";
import InputRadioGroup from "../UI/InputRadioGroup";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import Modal from "./Modal";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, multiService, theme) {
  return {
    fontWeight: multiService.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function Form({}) {
  const theme = useTheme();
  const [multiService, setMultiService] = useState([]);
  const path = usePathname();
  let myParam = "getAQuotePage";
  let leadSource;
  const [formData, setFormData] = useState({
    page: "getAQuotePage",
    name: "",
    email: "",
    phone: "",
    role: "",
    startDate: dayjs().format("YYYY-MM-DD"),
    endDate: dayjs().format("YYYY-MM-DD"),
    compilance: "",
    services: "",
    comment: "",
    serviceOptions: {},
  });

  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    myParam = urlParams.get("ref");
    leadSource = urlParams.get("utm_source");
    console.log({ myParam });
  }

  useEffect(() => {
    setFormData({
      ...formData,
      ["services"]: multiService,
    });
  }, [multiService]);

  const [selectedService, setSelectedService] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const calendlyInvitee = async (address) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${process.env.NEXT_PUBLIC_CALENDLY_API_KEY}`);
    myHeaders.append(
      "Cookie",
      "_cfuvid=jlfcXJspk5rcH6BPh5t4jhbZhdQCfF6e6nePuOIofPM-1731324357342-0.0.1.1-604800000"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${address}/invitees`, requestOptions)
      .then((response) => response.text())
      .then(async (result) => {
        let resultData = JSON.parse(result);
        console.log({ resultData });
        let pipeData = {
          email: resultData.collection[0].email,
          name: resultData.collection[0].name,
          role: resultData.collection[0]?.questions_and_answers?.find(
            (o) => o.question == "What is your role?"
          )?.answer,
          phone: resultData.collection[0]?.questions_and_answers?.find((o) => o.question == "Phone")
            ?.answer,
        };
        await apiCall(pipeData);
        if (path !== "/contact-us") {
          router.push("/thank-you");
        }
      })
      .catch((error) => console.log("error", error));
  };

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: async (e) => {
      await calendlyInvitee(e.data.payload?.event?.uri);

      console.log({ e });
    },
    onPageHeightResize: (e) => console.log(e.data.payload.height),
  });

  const serviceConvert = (services) => {
    console.log({ services });
    let apiSerice = "";
    services?.map((service) => {
      if (service == "Web Application Penetration Testing") {
        apiSerice = apiSerice + "32,";
      }
      if (service == "Internal Network Pen Test") {
        console.log("I am internal");
        apiSerice = apiSerice + "33,";
      }
      if (service == "External Network Pen Test") {
        apiSerice = apiSerice + "34,";
      }
      if (service == "Active Directory Security") {
        apiSerice = apiSerice + "35,";
      }
      if (service == "Wi-Fi Security Assessment") {
        apiSerice = apiSerice + "36,";
      }
      if (service == "Physical Security") {
        apiSerice = apiSerice + "37,";
      }
      if (service == "Phishing Campaign") {
        apiSerice = apiSerice + "38,";
      }
    });
    console.log({ apiSerice });
    return apiSerice;
  };

  let apiCall = async (formData) => {
    console.log({ formData });
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append(
      "Cookie",
      "__cf_bm=EWqoogoJMh9Rnrt8Y4Y5Z988d_6CPOKkscKGLONPTqA-1731011025-1.0.1.1-FoHWCAsVqnP8lLjFPPeRM_kylQUBFA20BhGYgcmg38MmCOfSajmZXfdv1jXhp7RZOC1LzQlTOMpa5fX4Idgi2g"
    );

    const raw = JSON.stringify({
      title: formData?.name,

      organization_id: 6,
      origin: "API",
      origin_id: null,
      channel: null,
      channel_id: "Jun23 Billboards",

      was_seen: false,
      value: {
        amount: 0,
        currency: "USD",
      },
      expected_close_date: null,

      visible_to: "3",
      "3445a2c9b2ec6842384e5b1fd6b5c9c93cfeeb31": formData?.role,
      "7c8a75a395fbfcf864f5178b9af05199725e067d": formData?.compliance == "yes" ? "30" : "31", //30 yes 31 no
      e4121ce08fecaed9b5f292ed159c2ce9bfc472d0: formData?.phone,
      dbd7e2d3ef1640e0bb3211b4133fe6265d401182: formData?.email,
      "4eb6228b564e34502039a04f01c7a0d0b764feea": formData?.startDate, //start date
      "60366c88491c38ce92a10fb4368631cd1645d749": formData.endDate, //end date
      "7a09c3878d4e153a1a492aa8db0b283d80fa1f41": serviceConvert(formData.services), // 32 to 38
      "5b006f188f1a637cf5f3a259c8867fa8fb61cb80": JSON.stringify(formData?.serviceOptions || ""),
      "278ce4e9e1933aae3d60dc89b2349edf253a1205": leadSource ? "Google Ads" : "Natural",
      "0069694c4627d65c11e90c5023105304a252288d": formData?.comment,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://api.pipedrive.com/v1/leads?api_token=${process.env.NEXT_PUBLIC_PIPEDRIVE_API_KEY}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };

  const handleChangeSelect = (event) => {
    const {
      target: { value },
    } = event;
    setMultiService(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name == "endDate" || name == "startDate") {
      value = dayjs(value).format("YYYY-MM-DD");
      if (name == "startDate" && dayjs(formData.endDate).isBefore(value)) {
        console.log("I am in ");
        setFormData({ ...formData, endDate: value, [name]: value });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  console.log({ formData });
  const handleServiceInputChange = (service, name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      serviceOptions: {
        ...prevData.serviceOptions,
        [service]: {
          ...prevData.serviceOptions[service],
          [name]: value,
        },
      },
    }));
  };

  const handleSelectChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await apiCall(formData);

    try {
      setLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, page: myParam }),
      });
      setLoading(false);
      if (response.ok) {
        //console.log("Email sent successfully");
        if (path !== "/contact-us") {
          router.push("/thank-you");
        }
      } else {
        console.error("Failed to send email");
        //setModalStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      //setModalStatus("error");
    }
    //setIsModalOpen(true);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsModalOpen(true);
  //   setModalStatus('error');
  //   console.log("Form data: ", formData);
  // };

  const serviceInputOptions = {
    "Web Application Penetration Testing": [
      {
        name: "How many web applications are within the scope for testing?",
        label: "How many web applications are within the scope for testing?",
        placeholder: "Enter",
      },
      {
        name: "How many total web pages does each application contain?",
        label: "How many total web pages does each application contain?",
        placeholder: "Enter",
      },
    ],
    "Internal Network Pen Test": [
      {
        name: "How many IP addresses in your internal network are within the scope for penetration testing?",
        label:
          "How many IP addresses in your internal network are within the scope for penetration testing?",
        placeholder: "Enter",
      },
    ],
    "External Network Pen Test": [
      {
        name: "How many external, public-facing IP addresses are within the scope for penetration testing?",
        label:
          "How many external, public-facing IP addresses are within the scope for penetration testing?",
        placeholder: "Enter",
      },
    ],
    "Active Directory Security": [
      {
        name: "How many Active Directory objects are in your environment?",
        label: "How many Active Directory objects are in your environment?",
        placeholder: "Enter",
      },
    ],
    "Wi-Fi Security Assessment": [
      {
        name: "How many locations are within the scope for this assessment?",
        label: "How many locations are within the scope for this assessment?",
        placeholder: "Enter",
      },
    ],
    "Physical Security": [
      {
        name: "How many locations are within the scope for this assessment?",
        label: "How many locations are within the scope for this assessment?",
        placeholder: "Enter",
      },
    ],
    "Phishing Campaign": [
      {
        name: "Which specific compliance standards apply?",
        label: "Which specific compliance standards apply (e.g., SOC 2, PCI-DSS, HIPAA, etc.)?",
        placeholder: "Enter",
      },
      {
        name: "How many employees does your organization have?",
        label: "How many employees does your organization have?",
        placeholder: "Enter",
      },
      {
        name: "Are there specific departments or user groups to target for the phishing campaign? If yes please provide the number of users",
        label:
          "Are there specific departments or user groups to target for the phishing campaign? If yes please provide the number of users",
        placeholder: "Enter",
      },
    ],
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {path === "/get-a-quote" && (
        <>
          <form style={{ marginTop: "18px" }} className="form" action="" onSubmit={handleSubmit}>
            <h3 className="form__title dark">Get a Quote</h3>
            <InputGroup
              label={"Full Name"}
              placeholder={"Full Name"}
              name={"name"}
              type={"text"}
              value={formData.name}
              onChange={handleChange}
            />
            <div className="form__flex">
              <InputGroup
                label={"Email"}
                placeholder={"Email"}
                name={"email"}
                type={"email"}
                value={formData.email}
                onChange={handleChange}
              />
              <InputGroup
                label={"Phone"}
                placeholder={"Phone"}
                name={"phone"}
                type={"tel"}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <InputGroup
              label={"Your Role"}
              placeholder={"Your Role"}
              name={"role"}
              type={"text"}
              value={formData.role}
              onChange={handleChange}
            />
            {path === "/get-a-quote" ? (
              <>
                <Typography
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    fontFamily: '"Prompt", sans-serif',
                    color: "#000718",
                  }}
                >
                  What is the desired timeline?
                </Typography>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <>
                    <DatePicker
                      style={{ border: "solid 2px #e6e8ec" }}
                      inputFormat="yyyy-MM-dd"
                      onChange={(e) => {
                        handleChange({ target: { name: "startDate", value: e } });
                      }}
                      minDate={dayjs()}
                      value={dayjs(formData.startDate)}
                    />

                    <DatePicker
                      style={{ border: "solid 2px #e6e8ec" }}
                      inputFormat="yyyy-MM-dd"
                      onChange={(e) => {
                        handleChange({ target: { name: "endDate", value: e } });
                      }}
                      minDate={dayjs(formData.startDate)}
                      value={dayjs(formData.endDate)}
                    />
                  </>
                </div>
                <InputRadioGroup
                  label={"Are you requesting this test due to compliance requirements?"}
                  name={"compliance"}
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                  ]}
                  value={formData.compliance}
                  onChange={handleChange}
                />

                <FormControl fullWidth sx={{ marginRight: "15px" }}>
                  <Typography
                    style={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      fontFamily: '"Prompt", sans-serif',
                      color: "#000718",
                      marginBottom: "10px",
                    }}
                  >
                    Services You Need
                  </Typography>
                  <Select
                    id="demo-multiple-chip"
                    placeholder="Services"
                    multiple
                    displayEmpty
                    value={multiService}
                    onChange={handleChangeSelect}
                    input={<OutlinedInput />}
                    renderValue={(selected) => (
                      <>
                        {!selected.length ? (
                          <Typography>Services</Typography>
                        ) : (
                          <Box
                            sx={{
                              display: "flex",
                              overflowX: "scroll",
                            }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} style={{ marginLeft: "3px" }} />
                            ))}
                          </Box>
                        )}
                      </>
                    )}
                    MenuProps={MenuProps}
                  >
                    {Object.keys(serviceInputOptions).map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, multiService, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {multiService.map((multi) => {
                  return (
                    <>
                      <Typography
                        style={{
                          fontSize: "1rem",
                          fontWeight: "700",
                          fontFamily: '"Prompt", sans-serif',
                          color: "#000718",
                        }}
                      >
                        {multi}
                      </Typography>
                      {serviceInputOptions[multi]?.map((input) => (
                        <InputGroup
                          key={input.name}
                          label={input.label}
                          placeholder={input.placeholder}
                          name={input.name}
                          type={"text"}
                          value={formData.serviceOptions[multi]?.[input.name] || ""}
                          onChange={(e) =>
                            handleServiceInputChange(multi, input.name, e.target.value)
                          }
                        />
                      ))}
                    </>
                  );
                })}
              </>
            ) : (
              <div className="form__input-container">
                <label className="form__label dark">Comment</label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  id=""
                  onChange={handleChange}
                ></textarea>
              </div>
            )}
            <ButtonSimple
              className={"primary"}
              type={"submit"}
              text={
                !loading ? (
                  "Get a Quote"
                ) : (
                  <CircularProgress style={{ color: "white", width: "15px", height: "auto" }} />
                )
              }
            />
          </form>
          <Modal isOpen={isModalOpen} status={modalStatus} onClose={onClose} />
        </>
      )}
      {path === "/book-free" && (
        <div className="form">
          <InlineWidget
            styles={{ minWidth: "100px!important", height: "630px" }}
            url="https://calendly.com/stringrai/30min"
          />
        </div>
      )}
      {path === "/contact-us" && (
        <>
          <form className="form" action="" onSubmit={handleSubmit}>
            <h3 className="form__title dark">Contact Us</h3>
            <InputGroup
              label={"Full Name"}
              placeholder={"Full Name"}
              name={"name"}
              type={"text"}
              value={formData.name}
              onChange={handleChange}
            />

            <InputGroup
              label={"Email"}
              placeholder={"Email"}
              name={"email"}
              type={"email"}
              value={formData.email}
              onChange={handleChange}
            />
            <InputGroup
              label={"Phone"}
              placeholder={"Phone"}
              name={"phone"}
              type={"tel"}
              value={formData.phone}
              onChange={handleChange}
            />

            <InputGroup
              label={"Your Role"}
              placeholder={"Your Role"}
              name={"role"}
              type={"text"}
              value={formData.role}
              onChange={handleChange}
            />

            <div className="form__input-container" style={{ height: "150px" }}>
              <label className="form__label dark">Comment</label>
              <textarea
                name="comment"
                value={formData.comment}
                id=""
                onChange={handleChange}
              ></textarea>
            </div>

            <ButtonSimple
              className={"primary"}
              type={"submit"}
              text={
                !loading ? (
                  "Contact Us"
                ) : (
                  <CircularProgress style={{ color: "white", width: "15px", height: "auto" }} />
                )
              }
            />
          </form>
          <Modal isOpen={isModalOpen} status={modalStatus} onClose={onClose} />
        </>
      )}
    </LocalizationProvider>
  );
}
