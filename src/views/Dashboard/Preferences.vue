<template>
  <setting-layout :dark="dark" :active="4" :active_="2">
    <div class="row">
      <div class="col-12">
        <div class="card border-0">
          <div class="card-header border-bottom mb-4 p-0 pb-3">
            <h3 class="fw-semi-bold card-title">Preferences</h3>
          </div>
          <div class="card-body p-0">
            <form @submit.prevent="" class="row needs-validation" novalidate="">
              <div class="form-group col-12 col-md-6">
                <label class="me-sm-2">Local Currency</label>
                <div class="invalid-feedback">Please select a currency.</div>
                <select class="form-select border-end-0">
                  <option>USD</option>
                  <option>CAD</option>
                  <option>Euro</option>
                </select>
              </div>
              <div class="form-group col-12 col-md-6">
                <label class="me-sm-2">Time Zone</label>
                <div class="invalid-feedback">Please select time zone.</div>
                <select class="form-select border-end-0">
                  <option> (GMT-12:00) International Date Line West</option>
                  <option> (GMT-11:00) Midway Island, Samoa</option>
                  <option>
                    (GMT-10:00) Hawaii
                  </option>
                  <option>
                    (GMT-09:00) Alaska
                  </option>
                  <option> (GMT-08:00) Pacific Time (US &amp; Canada)</option>
                  <option> (GMT-08:00) Tijuana, Baja California</option>
                  <option>
                    GMT-07:00) Arizona
                  </option>
                  <option> (GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                  <option> (GMT-07:00) Mountain Time (US &amp; Canada)</option>
                  <option>
                    GMT-06:00) Central America
                  </option>
                  <option> (GMT-06:00) Central Time (US &amp; Canada)</option>
                  <option>
                    (GMT-06:00) Guadalajara, Mexico City, Monterrey</option
                  >
                  <option>
                    GMT-06:00) Saskatchewan
                  </option>
                  <option> GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                  <option> (GMT-05:00) Eastern Time (US &amp; Canada)</option>
                  <option>
                    (GMT-05:00) Indiana (East)
                  </option>
                  <option>
                    (GMT-04:00) Atlantic Time (Canada)
                  </option>
                  <option>
                    GMT-04:00) Caracas, La Paz
                  </option>
                  <option>
                    GMT-04:00) Manaus
                  </option>
                  <option>
                    (GMT-04:00) Santiago
                  </option>
                  <option>
                    "&gt;(GMT-03:30) Newfoundland
                  </option>
                  <option>
                    (GMT-03:00) Brasilia
                  </option>
                  <option>
                    GMT-03:00) Buenos Aires, Georgetown
                  </option>
                  <option>
                    (GMT-03:00) Greenland
                  </option>
                  <option>
                    (GMT-03:00) Montevideo
                  </option>
                  <option>
                    (GMT-02:00) Mid-Atlantic
                  </option>
                  <option>
                    GMT-01:00) Cape Verde Is.
                  </option>
                  <option>
                    (GMT-01:00) Azores
                  </option>
                  <option> MT+00:00) Casablanca, Monrovia, Reykjavik</option>
                  <option>
                    GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon,
                    London</option
                  >
                  <option>
                    GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
                  </option>
                  <option>
                    GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
                  </option>
                  <option>
                    GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option
                  >
                  <option> GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                  <option>
                    GMT+01:00) West Central Africa
                  </option>
                  <option>
                    GMT+02:00) Amman
                  </option>
                  <option>
                    GMT+02:00) Athens, Bucharest, Istanbul
                  </option>
                  <option>
                    GMT+02:00) Beirut
                  </option>
                  <option>
                    GMT+02:00) Cairo
                  </option>
                  <option>
                    MT+02:00) Harare, Pretoria
                  </option>
                  <option>
                    GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
                  </option>
                  <option>
                    GMT+02:00) Jerusalem
                  </option>
                  <option>
                    GMT+02:00) Minsk
                  </option>
                  <option>
                    GMT+02:00) Windhoek
                  </option>
                  <option>
                    MT+03:00) Kuwait, Riyadh, Baghdad
                  </option>
                  <option> GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                  <option>
                    MT+03:00) Nairobi
                  </option>
                  <option>
                    MT+03:00) Tbilisi
                  </option>
                  <option>
                    &gt;(GMT+03:30) Tehran
                  </option>
                  <option>
                    MT+04:00) Abu Dhabi, Muscat
                  </option>
                  <option>
                    GMT+04:00) Baku
                  </option>
                  <option>
                    GMT+04:00) Yerevan
                  </option>
                  <option>
                    (GMT+04:30) Kabul
                  </option>
                  <option>
                    GMT+05:00) Yekaterinburg
                  </option>
                  <option> MT+05:00) Islamabad, Karachi, Tashkent</option>
                  <option>
                    (GMT+05:30) Sri Jayawardenapura
                  </option>
                  <option>
                    (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option
                  >
                  <option>
                    &gt;(GMT+05:45) Kathmandu
                  </option>
                  <option>
                    GMT+06:00) Almaty, Novosibirsk
                  </option>
                  <option>
                    MT+06:00) Astana, Dhaka
                  </option>
                  <option>
                    (GMT+06:30) Yangon (Rangoon)
                  </option>
                  <option>
                    MT+07:00) Bangkok, Hanoi, Jakarta
                  </option>
                  <option>
                    GMT+07:00) Krasnoyarsk
                  </option>
                  <option>
                    MT+08:00) Beijing, Chongqing, Hong Kong, Urumqi
                  </option>
                  <option>
                    MT+08:00) Kuala Lumpur, Singapore
                  </option>
                  <option>
                    MT+08:00) Irkutsk, Ulaan Bataar
                  </option>
                  <option>
                    MT+08:00) Perth
                  </option>
                  <option>
                    MT+08:00) Taipei
                  </option>
                  <option>
                    MT+09:00) Osaka, Sapporo, Tokyo
                  </option>
                  <option>
                    MT+09:00) Seoul
                  </option>
                  <option>
                    GMT+09:00) Yakutsk
                  </option>
                  <option>
                    (GMT+09:30) Adelaide
                  </option>
                  <option>
                    (GMT+09:30) Darwin
                  </option>
                  <option>
                    GMT+10:00) Brisbane
                  </option>
                  <option> (GMT+10:00) Canberra, Melbourne, Sydney</option>
                  <option>
                    (GMT+10:00) Hobart
                  </option>
                  <option>
                    GMT+10:00) Guam, Port Moresby
                  </option>
                  <option>
                    (GMT+10:00) Vladivostok
                  </option>
                  <option>
                    (GMT+11:00) Magadan, Solomon Is., New Caledonia</option
                  >
                  <option>
                    (GMT+12:00) Auckland, Wellington
                  </option>
                  <option> GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                  <option>
                    GMT+13:00) Nuku'alofa
                  </option>
                </select>
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-md">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-12 section-padding pb-0">
        <div class="card border-0">
          <div class="card-header border-bottom mb-4 p-0 pb-3">
            <h3 class="fw-semi-bold card-title">Notifications</h3>
          </div>
          <div class="card-body p-0">
            <form @submit.prevent="" action="#">
              <div class="form-group col-12 mb-0">
                <label class="toggle d-flex align-items-center">
                  <input class="toggle-checkbox" type="checkbox" checked="" />
                  <span class="toggle-switch"></span>
                  <span class="toggle-label"
                    >I send or receive digital currency</span
                  >
                </label>
                <label class="toggle d-flex align-items-center">
                  <input class="toggle-checkbox" type="checkbox" />
                  <span class="toggle-switch"></span>
                  <span class="toggle-label">I receive merchant order</span>
                </label>
                <label class="toggle d-flex align-items-center">
                  <input class="toggle-checkbox" type="checkbox" />
                  <span class="toggle-switch"></span>
                  <span class="toggle-label"
                    >There are recommendation for my sccount</span
                  >
                </label>
              </div>
              <div class="col-12">
                <button class="btn btn-primary">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </setting-layout>
</template>

<script>
import SettingLayout from "../../components/Dashboard/SettingLayout.vue";
export default {
  components: {
    SettingLayout,
  },
  props: {
    dark: Boolean,
  },
};
</script>
