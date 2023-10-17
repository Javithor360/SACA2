let PPMvalue = 0;
let Buzzer;

// ! @route POST api/update_ppm_value
// ! @desc Updates the PPM value from Arduino to Web
// ! @access public

const update_ppm_value = (req, res) => {
  try {
    // We need to identify the request's body.
    const { Value } = req.body;

    // We check if the value has been sent.
    if (!Value) {
      return res
        .status(500)
        .json({ message: "You must provide a value in PPM" });
    }

    PPMvalue = Value;

    console.log("[PING] Update PPM Value has been utilised");
    return res.status(200).json({ success: true, value: Value });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

// ! @route POST api/get_ppm_value
// ! @desc Gets the PPM value to send it to web server
// ! @access public

const get_ppm_value = (req, res) => {
  try {
    console.log("[PING] Get PPM Value has been utilised");
    return res.status(200).json({ success: true, value: PPMvalue });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

// ! @route POST api/toggle_buzzer
// ! @desc Toggles whether the alarm is enabled or disabled
// ! @access public

const toggle_buzzer = (req, res) => {
  try {
    // We need to identify the request's body.
    const { Toggle } = req.body;

    // We check if the value has been sent.
    // if (!Toggle) {
    //   return res
    //     .status(500)
    //     .json({ message: "You must provide wheter the buzzer is active or not" });
    // }

    Buzzer = Toggle;

    console.log("[PING] Toggle Buzzer has been utilised");
    return res.status(200).json({ success: true, toggle: Toggle });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

// ! @route POST api/get_buzzer_status
// ! @desc Determines whether the alarm is enabled or disabled
// ! @access public

const get_buzzer_status = (req, res) => {
  try {
    if(!Buzzer) {
      if(PPMvalue >= 1000) {
        Buzzer = true;
      } else {
        Buzzer = false;
      }
    }
    console.log("[PING] Get Buzzer Status has been utilised");
    return res.status(200).json({ success: true, value: Buzzer });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error });
  }
};

export { update_ppm_value, get_ppm_value, toggle_buzzer, get_buzzer_status };
