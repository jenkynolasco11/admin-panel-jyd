const formatPhone = s => {
    const s2 = ('' + s).replace(/\D/g, '')
    const m = s2.match(/^(\d{3})(\d{3})(\d{4})$/)

    return !m ? null : '(' + m[1] + ') ' + m[2] + '-' + m[3]
}

export default data => `
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
        <!--[if gte mso 9]><xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
        </xml><![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width">
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <title></title>
        <!--[if !mso]><!-- -->
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css">
        <!--<![endif]-->

        <style type="text/css" id="media-query">
        body {
            margin: 0;
            padding: 0;
        }

        table,
        tr,
        td {
            vertical-align: top;
            border-collapse: collapse;
        }

        .ie-browser table,
        .mso-container table {
            table-layout: fixed;
        }

        * {
            line-height: inherit;
        }

        a[x-apple-data-detectors=true] {
            color: inherit !important;
            text-decoration: none !important;
        }

        [owa] .img-container div,
        [owa] .img-container button {
            display: block !important;
        }

        [owa] .fullwidth button {
            width: 100% !important;
        }

        [owa] .block-grid .col {
            display: table-cell;
            float: none !important;
            vertical-align: top;
        }

        .ie-browser .num12,
        .ie-browser .block-grid,
        [owa] .num12,
        [owa] .block-grid {
            width: 780px !important;
        }

        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height: 100%;
        }

        .ie-browser .mixed-two-up .num4,
        [owa] .mixed-two-up .num4 {
            width: 216px !important;
        }

        .ie-browser .mixed-two-up .num8,
        [owa] .mixed-two-up .num8 {
            width: 432px !important;
        }

        .ie-browser .block-grid.two-up .col,
        [owa] .block-grid.two-up .col {
            width: 327px !important;
        }

        .ie-browser .block-grid.three-up .col,
        [owa] .block-grid.three-up .col {
            width: 218px !important;
        }

        .ie-browser .block-grid.four-up .col,
        [owa] .block-grid.four-up .col {
            width: 163px !important;
        }

        .ie-browser .block-grid.five-up .col,
        [owa] .block-grid.five-up .col {
            width: 131px !important;
        }

        .ie-browser .block-grid.six-up .col,
        [owa] .block-grid.six-up .col {
            width: 109px !important;
        }

        .ie-browser .block-grid.seven-up .col,
        [owa] .block-grid.seven-up .col {
            width: 93px !important;
        }

        .ie-browser .block-grid.eight-up .col,
        [owa] .block-grid.eight-up .col {
            width: 81px !important;
        }

        .ie-browser .block-grid.nine-up .col,
        [owa] .block-grid.nine-up .col {
            width: 72px !important;
        }

        .ie-browser .block-grid.ten-up .col,
        [owa] .block-grid.ten-up .col {
            width: 62px !important;
        }

        .ie-browser .block-grid.eleven-up .col,
        [owa] .block-grid.eleven-up .col {
            width: 59px !important;
        }

        .ie-browser .block-grid.twelve-up .col,
        [owa] .block-grid.twelve-up .col {
            width: 54px !important;
        }

        @media only screen and (min-width: 672px) {
            .block-grid {
            width: 780px !important;
            }
            .block-grid .col {
            vertical-align: top;
            }
            .block-grid .col.num12 {
            width: 780px !important;
            }
            .block-grid.mixed-two-up .col.num4 {
            width: 216px !important;
            }
            .block-grid.mixed-two-up .col.num8 {
            width: 432px !important;
            }
            .block-grid.two-up .col {
            width: 327px !important;
            }
            .block-grid.three-up .col {
            width: 218px !important;
            }
            .block-grid.four-up .col {
            width: 163px !important;
            }
            .block-grid.five-up .col {
            width: 131px !important;
            }
            .block-grid.six-up .col {
            width: 109px !important;
            }
            .block-grid.seven-up .col {
            width: 93px !important;
            }
            .block-grid.eight-up .col {
            width: 81px !important;
            }
            .block-grid.nine-up .col {
            width: 72px !important;
            }
            .block-grid.ten-up .col {
            width: 62px !important;
            }
            .block-grid.eleven-up .col {
            width: 59px !important;
            }
            .block-grid.twelve-up .col {
            width: 54px !important;
            }
        }

        @media (max-width: 672px) {
            .block-grid,
            .col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
            }
            .block-grid {
            width: calc(100% - 40px) !important;
            }
            .col {
            width: 100% !important;
            }
            .col>div {
            margin: 0 auto;
            }
            img.fullwidth,
            img.fullwidthOnMobile {
            max-width: 100% !important;
            }
            .no-stack .col {
            min-width: 0 !important;
            display: table-cell !important;
            }
            .no-stack.two-up .col {
            width: 50% !important;
            }
            .no-stack.mixed-two-up .col.num4 {
            width: 33% !important;
            }
            .no-stack.mixed-two-up .col.num8 {
            width: 66% !important;
            }
            .no-stack.three-up .col.num4 {
            width: 33% !important;
            }
            .no-stack.four-up .col.num3 {
            width: 25% !important;
            }
            .mobile_hide {
            min-height: 0px;
            max-height: 0px;
            max-width: 0px;
            display: none;
            overflow: hidden;
            font-size: 0px;
            }
        }
        </style>
    </head>

    <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #FFF">
        <style type="text/css" id="media-query-bodytag">
        @media (max-width: 520px) {
            .block-grid {
            min-width: 320px !important;
            max-width: 100% !important;
            width: 100% !important;
            display: block !important;
            }

            .col {
            min-width: 320px !important;
            max-width: 100% !important;
            width: 100% !important;
            display: block !important;
            }

            .col>div {
            margin: 0 auto;
            }

            img.fullwidth {
            max-width: 100% !important;
            }
            img.fullwidthOnMobile {
            max-width: 100% !important;
            }
            .no-stack .col {
            min-width: 0 !important;
            display: table-cell !important;
            }
            .no-stack.two-up .col {
            width: 50% !important;
            }
            .no-stack.mixed-two-up .col.num4 {
            width: 33% !important;
            }
            .no-stack.mixed-two-up .col.num8 {
            width: 66% !important;
            }
            .no-stack.three-up .col.num4 {
            width: 33% !important;
            }
            .no-stack.four-up .col.num3 {
            width: 25% !important;
            }
            .mobile_hide {
            min-height: 0px !important;
            max-height: 0px !important;
            max-width: 0px !important;
            display: none !important;
            overflow: hidden !important;
            font-size: 0px !important;
            }
        }
        </style>
        <!--[if IE]><div class="ie-browser"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table class="nl-container" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #FFF;width: 100%"
        cellpadding="0" cellspacing="0">
        <tbody>
            <tr style="vertical-align: top">
            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #FFF;"><![endif]-->

                <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                    <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                            <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="line-height:14px;font-size:12px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                <p style="margin: 0;line-height: 14px;text-align: center;font-size: 12px">
                                    <span style="color: #000; font-size: 22px; line-height: 26px;">
                                    <span style="line-height: 26px; font-size: 22px;">JYD Auto Leasing And Sales Credit Application</span>
                                    </span>
                                </p>
                                </div>
                            </div>
                            <!--[if mso]></td></tr></table><![endif]-->
                            </div>



                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                            <tbody>
                                <tr style="vertical-align: top">
                                <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 2px;padding-bottom: 2px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <table class="divider_content" height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="98%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #CB0000;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <tbody>
                                        <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                            <span>&#160;</span>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>

                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                </div>
                </div>
    <!--------------------- -->
                <div style="margin:10px;border:1px solid #000;padding:4px;">
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="font-size: 18px; line-height: 21px;">
                                        <strong>
                                        <span style="color: #000; line-height: 21px; font-size: 18px;">Applicant Information</span>
                                        </strong>
                                    </span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->



                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                <tbody>
                                <tr style="vertical-align: top">
                                    <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 2px;padding-bottom: 2px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <table class="divider_content" height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="98%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                        <tbody>
                                        <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                            <span>&#160;</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Full Name:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'First Name' ] } ${ data[ 'Middle Name' ] } ${ data['Last Name' ] }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Drivers License #:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Driver\'s Licence Number' ] }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Address:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data.Address }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">DL State/Exp Date:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Driver\'s State' ] } ${ ('00' + data[ 'Driver\'s License Expiration Date Month' ]).slice(-2) }/${ ('00'+data[ 'Driver\'s License Expiration Date Day' ]).slice(-2) }/${ (data[ 'Driver\'s License Expiration Date Year' ]).slice(-2) }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">City/State/ZIP:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data.City }, ${ data.State } ${ data[ 'ZIP Code' ] }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Phone Number:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ formatPhone(data[ 'Day Time Phone' ]) }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Social Security:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data.SSN }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Email:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <a style="color:#000;text-decoration: none;" href="mailto:${ data.email }" target="_blank" rel="noopener">${ data.email }</a>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">DOB:﻿</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ ('00'+data[ 'DOB Month' ]).slice(-2) }/${ ('00'+data[ 'DOB Day' ]).slice(-2) }/${ ('00'+data[ 'DOB Year' ]).slice(-2) }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Time at Residency:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Years Living There' ] || 0 } years, ${ data[ 'Months Living There' ] || 0 } months</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; line-height: 16px; font-size: 14px;">Residence Type:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Home Type'  ] }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 12px;line-height: 14px">
                                    <span style="font-size: 14px; line-height: 16px; color: #000;">Rent/Morgage:&#160;</span>
                                    <br>
                                    </p>
                                    <br>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">$${ data[ 'Monthly Payment' ].match(/\$? ?([\d,]*)(\.\d*)?/)[ 1 ].replace(/,/g,'') || 0 }.00</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 12px;line-height: 14px;text-align: left">
                                    <span style="font-size: 14px; line-height: 16px;">
                                        <span style="line-height: 16px; color: #000; font-size: 14px;">
                                        <span style="line-height: 16px; font-size: 14px;">Salesman Name:</span>
                                        </span>
                                    </span>
                                    </p>
                                    <p style="margin: 0;font-size: 12px;line-height: 14px;text-align: left">
                                    <span style="font-size: 10px; line-height: 12px;">
                                        <span style="line-height: 12px; color: #000; font-size: 10px;">
                                        <span style="line-height: 12px; font-size: 10px;">(or Promo Code)</span>
                                        </span>
                                    </span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Salesman\'s Name' ]}</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->




                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                </div>
    <!--------------------- -->
                <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <!---------- IT GOES HERE ---------->
                </div>
                </div>
    <!--------------------- -->


                <div style="margin:10px;border:1px solid #000;padding:4px;">
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="font-size: 18px; line-height: 21px;">
                                        <strong>
                                        <span style="color: #000; line-height: 21px; font-size: 18px;">Applicant Previous Residence</span>
                                        </strong>
                                    </span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->



                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                <tbody>
                                <tr style="vertical-align: top">
                                    <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 2px;padding-bottom: 2px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <table class="divider_content" height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="98%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                        <tbody>
                                        <tr style="vertical-align: top">
                                            <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                            <span>&#160;</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; line-height: 16px; font-size: 14px;">Address:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Previous Address' ] }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->




                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->




                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>


    <!--------------------- -->
                <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <!---------- IT GOES HERE ---------->
                </div>
                </div>
    <!--------------------- -->
                <div style="margin:10px;border:1px solid #000;padding:4px;">
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->

                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 12px;line-height: 14px">
                                    <span style="font-size: 18px; line-height: 21px;">
                                        <strong>
                                        <span style="font-size: 18px; line-height: 21px; color: #000;">Applicant Employment Information</span>
                                        </strong>
                                    </span>
                                    <br>
                                    </p>
                                    <br>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Employer:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Employer\'s Name' ] }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Address:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px;text-align: left">${ data[ 'Employer\'s Address' ] }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Monthly Income:</span>
                                    </p>
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="font-size: 10px; line-height: 12px; color: #000;">(before taxes)</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">$${ data[ 'Monthly Income' ].match(/\$? ?([\d,]*)(\.\d*)?/)[ 1 ].replace(/,/g,'') || 0 }.00</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="font-size: 14px; line-height: 16px; color: #000;">Phone Number:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ formatPhone(data[ 'Employer\'s Phone' ]) }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Occupation:</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Job Title' ] }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Time on Job</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Employee Years' ] || 0 } years, ${ data[ 'Employee Months' ] || 0 } months</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid four-up ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 14px; line-height: 16px;">Previous Employer:</span>
                                    </p>
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="color: #000; font-size: 10px; line-height: 12px;">(Less than 2 years)</span>
                                    </p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;"><![endif]-->
                                <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 2px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                    <p style="margin: 0;font-size: 14px;line-height: 17px">${ data[ 'Previous Employer' ] }</p>
                                </div>
                                </div>
                                <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            &#160;

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td><td align="center" width="164" style=" width:164px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num3" style="max-width: 320px;min-width: 163px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            &#160;

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            &#160;

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                <div style="background-color:transparent;">
                    <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                        <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                        <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                        <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                            <!--[if (!mso)&(!IE)]><!-->
                            <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->

                            <!--[if (!mso)&(!IE)]><!-->
                            </div>
                            <!--<![endif]-->
                        </div>
                        </div>
                        <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                    </div>
                </div>
                </div>
    <!--------------------- -->
                <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                    <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->



                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                            <tbody>
                                <tr style="vertical-align: top">
                                <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 2px;padding-bottom: 2px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <table class="divider_content" align="center" border="0" cellpadding="0" cellspacing="0" width="98%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <tbody>
                                        <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                            <span></span>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>

                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                </div>
                </div>
                <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                    <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            <div class="">
                            <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 2px;"><![endif]-->
                            <div style="color:#000;line-height:120%;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif; padding-right: 10px; padding-left: 10px; padding-top: 10px; padding-bottom: 2px;">
                                <div style="font-size:12px;line-height:14px;color:#000;font-family:'Roboto', Tahoma, Verdana, Segoe, sans-serif;text-align:left;">
                                <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <span style="font-size: 14px; line-height: 16px;">
                                    <strong>Acknowledge and consent</strong>
                                    </span>: YES </p>
                                <p style="margin: 0;font-size: 14px;line-height: 17px">
                                    <br data-mce-bogus="1">
                                </p>
                                <p style="margin: 0;font-size: 14px;line-height: 17px;text-align: justify">
                                    <span style="font-size: 12px; line-height: 14px;">I certify that the above information is complete and accurate to the best of my knowledge.
                                    Creditors receiving this application will retain the application whether or not is approved.
                                    Creditors may rely on this application in deciding whether to grant the requested credit.
                                    False statements may subject me to criminal penalties. I authorize the creditors to obtain
                                    credit reports about me on an ongoing basis during this credit transaction. If this application
                                    is approved, I authorize the creditor to give credit information about me to its affiliates.</span>
                                </p>
                                </div>
                            </div>
                            <!--[if mso]></td></tr></table><![endif]-->
                            </div>

                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                </div>
                </div>
                <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                    <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->


                            &#160;

                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                </div>
                </div>
                <div style="background-color:transparent;">
                <div style="Margin: 0 auto;min-width: 320px;max-width: 780px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;"
                    class="block-grid ">
                    <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="background-color:transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width: 780px;"><tr class="layout-full-width" style="background-color:transparent;"><![endif]-->

                    <!--[if (mso)|(IE)]><td align="center" width="780" style=" width:780px; padding-right: 0px; padding-left: 0px; padding-top:2px; padding-bottom:2px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><![endif]-->
                    <div class="col num12" style="min-width: 320px;max-width: 780px;display: table-cell;vertical-align: top;">
                        <div style="background-color: transparent; width: 100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent; padding-top:2px; padding-bottom:2px; padding-right: 0px; padding-left: 0px;">
                            <!--<![endif]-->



                            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="divider " style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                            <tbody>
                                <tr style="vertical-align: top">
                                <td class="divider_inner" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;padding-right: 10px;padding-left: 10px;padding-top: 2px;padding-bottom: 2px;min-width: 100%;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <table class="divider_content" height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="98%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #CB0000;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                    <tbody>
                                        <tr style="vertical-align: top">
                                        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                            <span>&#160;</span>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </td>
                                </tr>
                            </tbody>
                            </table>

                            <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                        </div>
                    </div>
                    <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
                    </div>
                </div>
                </div>
                <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
            </tr>
        </tbody>
        </table>
        <!--[if (mso)|(IE)]></div><![endif]-->


    </body>

    </html>
`
