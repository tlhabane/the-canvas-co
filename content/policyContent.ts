/*
export interface PolicySection {
    title: string;
    content: Record<string, string[]>;
}

export interface PolicyData {
    id: string;
    title: string;
    effectiveDate: string;
    intro: string;
    sections: PolicySection[];
}

export const POLICIES: Record<string, PolicyData> = {
    "privacy": {
        id: "privacy",
        title: "Privacy Policy",
        effectiveDate: "15 February 2026",
        intro: "READ THIS POLICY CAREFULLY BEFORE BROWSING THIS WEBSITE OR USING ANY OF THE SERVICES. YOUR CONTINUED USE OF THIS WEBSITE INDICATES THAT YOU HAVE BOTH READ AND AGREE TO THE TERMS OF THIS POLICY. YOU CANNOT USE THIS WEBSITE IF YOU DO NOT ACCEPT THIS POLICY. ALL SECTIONS OF THIS POLICY ARE APPLICABLE TO BOTH MEMBERS AND GUESTS UNLESS THE SECTION EXPRESSLY STATES OTHERWISE.",
        sections: [
            {
                title: "Privacy Policy",
                content: {
                    "1.1 For the purposes of this section, Personal Information will be understood in accordance with the definition provided in the Protection of Personal Information Act 4 of 2013 (\"the Act\"). The Company also subscribes to the principles for electronically collecting personal information outlined in the Act, and the further legislation referred to therein. We endeavour to ensure the quality, accuracy and confidentiality of Personal Information in our possession.": [],
                    "1.2 In adopting this Privacy Policy, we wish to balance our legitimate business interests and your reasonable expectation of privacy. Accordingly, we will take all reasonable steps to prevent unauthorised access to, or disclosure of your Personal Information. However, it is impossible to guarantee that your Personal Information shall be 100% secure.": [],
                    "1.3 Users may be prompted or required to register an account with The Canvas Co. In so doing, users may be asked to provide the following information (“Personal Information”):": [
                        "1.3.1 First name and Surname",
                        "1.3.2 Physical and/or delivery address",
                        "1.3.3 Phone number",
                        "1.3.4 Email address",
                        "1.3.5 Bank account details",
                        "1.3.6 Company / CC / business name (if applicable)",
                        "1.3.7 Company / CC / business registration number / VAT Registration Number (if applicable)."
                    ],
                }
            },

        ]
    },
    "terms": {
        id: "terms",
        title: "Terms and Conditions",
        effectiveDate: "15 February 2026",
        intro: "READ THESE TERMS CAREFULLY BEFORE BROWSING THIS WEBSITE. YOUR CONTINUED USE OF THIS WEBSITE INDICATES THAT YOU HAVE BOTH READ AND ACCEPT THESE TERMS. YOU CANNOT USE THIS WEBSITE IF YOU DO NOT ACCEPT THESE TERMS. ALL SECTIONS OF THESE TERMS ARE APPLICABLE TO BOTH MEMBERS AND GUESTS UNLESS THE SECTION EXPRESSLY STATES OTHERWISE.",
        sections: []
    }
};
*/

export interface PolicyClause {
    [point: string]: string | PolicyClause[];
}

export interface PolicySection {
    title: string;
    clauses: PolicyClause[];
}

export interface PolicyData {
    id: string;
    title: string;
    effectiveDate: string;
    intro: string;
    sections: PolicySection[];
}


export const POLICIES: Record<string, PolicyData> = {
    privacy: {
        id: "privacy",
        title: "Privacy Policy",
        effectiveDate: "15 February 2026",
        intro:
            "THIS PRIVACY POLICY EXPLAINS HOW THE CANVAS CO COLLECTS, USES, STORES, AND PROTECTS PERSONAL INFORMATION IN CONNECTION WITH ITS PRINTING, PRODUCTION, AND FULFILMENT SERVICES. BY USING THIS WEBSITE OR ENGAGING OUR SERVICES, YOU CONSENT TO THE PRACTICES DESCRIBED HEREIN.",
        sections: [
            {
                title: "1. Legal Framework and Commitment",
                clauses: [
                    {
                        "1.1":
                            "Personal Information is processed in accordance with the Protection of Personal Information Act 4 of 2013 (“POPIA”)."
                    },
                    {
                        "1.2":
                            "The Canvas Co is committed to lawful, minimal, and secure processing of Personal Information in the ordinary course of providing printing and related services."
                    }
                ]
            },
            {
                title: "2. Information We Collect",
                clauses: [
                    {
                        "2.1":
                            "We collect Personal Information directly from clients when they request quotations, place orders, upload artwork, or communicate with us."
                    },
                    {
                        "2.2":
                            "The categories of Personal Information may include:"
                    },
                    {
                        "2.2.1":
                            "Contact details such as name, email address, telephone number, and delivery address."
                    },
                    {
                        "2.2.2":
                            "Business information including company name, registration number, and VAT number (where applicable)."
                    },
                    {
                        "2.2.3":
                            "Billing and payment information required to process transactions."
                    },
                    {
                        "2.2.4":
                            "Artwork files, branding assets, and production specifications supplied by the client."
                    }
                ]
            },
            {
                title: "3. Purpose of Processing",
                clauses: [
                    {
                        "3.1":
                            "Personal Information is processed for the purpose of providing printing, production, delivery, and customer support services."
                    },
                    {
                        "3.2":
                            "Information is also used for invoicing, quality control, dispute resolution, and legal compliance."
                    },
                    {
                        "3.3":
                            "Artwork files are processed solely for production, proofing, and fulfilment purposes."
                    }
                ]
            },
            {
                title: "4. Artwork and Confidential Materials",
                clauses: [
                    {
                        "4.1":
                            "The Canvas Co treats client-supplied artwork and branding materials as confidential."
                    },
                    {
                        "4.2":
                            "Artwork files are not shared externally except where required for production, logistics, or regulatory compliance."
                    },
                    {
                        "4.3":
                            "Clients warrant that they have the legal right to submit and reproduce all artwork provided."
                    }
                ]
            },
            {
                title: "5. Disclosure to Third Parties",
                clauses: [
                    {
                        "5.1":
                            "Personal Information may be shared with trusted third-party service providers such as couriers, payment processors, and production partners."
                    },
                    {
                        "5.2":
                            "All third parties are required to process Personal Information securely and only for authorised purposes."
                    }
                ]
            },
            {
                title: "6. Data Security",
                clauses: [
                    {
                        "6.1":
                            "Appropriate technical and organisational safeguards are implemented to protect Personal Information."
                    },
                    {
                        "6.2":
                            "While reasonable measures are taken, absolute security cannot be guaranteed."
                    }
                ]
            },
            {
                title: "7. Retention",
                clauses: [
                    {
                        "7.1":
                            "Personal Information is retained only for as long as necessary for operational, legal, and accounting purposes."
                    }
                ]
            },
            {
                title: "8. Data Subject Rights",
                clauses: [
                    {
                        "8.1":
                            "Clients may request access to, correction, or deletion of their Personal Information, subject to legal limitations."
                    }
                ]
            }
        ]
    },
    terms: {
        id: "terms",
        title: "Service Terms and Conditions",
        effectiveDate: "15 February 2026",
        intro:
            "THESE TERMS GOVERN THE SUPPLY OF PRINTING, PRODUCTION, AND RELATED SERVICES BY THE CANVAS CO. BY REQUESTING A QUOTATION, PLACING AN ORDER, OR SUPPLYING ARTWORK, YOU AGREE TO THESE TERMS.",
        sections: [
            {
                title: "1. Scope of Services",
                clauses: [
                    {
                        "1.1":
                            "The Canvas Co provides custom printing, branding, and production services based on client-supplied specifications."
                    },
                    {
                        "1.2":
                            "Services commence upon written acceptance of a quotation or confirmation of order."
                    }
                ]
            },
            {
                title: "2. Quotations and Orders",
                clauses: [
                    {
                        "2.1":
                            "All quotations are valid for a limited period and subject to material availability."
                    },
                    {
                        "2.2":
                            "Orders become binding once approved in writing or paid for."
                    }
                ]
            },
            {
                title: "3. Artwork Responsibility",
                clauses: [
                    {
                        "3.1":
                            "Clients are solely responsible for the accuracy, quality, and legality of submitted artwork."
                    },
                    {
                        "3.2":
                            "Artwork is printed as supplied. The Canvas Co is not responsible for spelling, layout, or design errors."
                    },
                    {
                        "3.3":
                            "Proof approval constitutes final acceptance of artwork."
                    }
                ]
            },
            {
                title: "4. Colour, Materials, and Production Variance",
                clauses: [
                    {
                        "4.1":
                            "Minor colour, texture, and material variations are inherent in printing and are not defects."
                    },
                    {
                        "4.2":
                            "Exact colour matching cannot be guaranteed due to equipment, substrates, and environmental factors."
                    }
                ]
            },
            {
                title: "5. Pricing and Payment",
                clauses: [
                    {
                        "5.1":
                            "Prices exclude delivery unless stated otherwise and are quoted in South African Rand."
                    },
                    {
                        "5.2":
                            "Full or partial payment may be required prior to production."
                    }
                ]
            },
            {
                title: "6. Cancellations and Refunds",
                clauses: [
                    {
                        "6.1":
                            "Orders cannot be cancelled once production has commenced."
                    },
                    {
                        "6.2":
                            "Refunds are limited to defective workmanship and exclude client-supplied errors."
                    }
                ]
            },
            {
                title: "7. Delivery and Risk",
                clauses: [
                    {
                        "7.1":
                            "Delivery timelines are estimates and not guaranteed."
                    },
                    {
                        "7.2":
                            "Risk passes to the client upon dispatch or collection."
                    }
                ]
            },
            {
                title: "8. Limitation of Liability",
                clauses: [
                    {
                        "8.1":
                            "The Canvas Co shall not be liable for indirect, consequential, or business losses."
                    },
                    {
                        "8.2":
                            "Liability is limited to the value of the affected order."
                    }
                ]
            },
            {
                title: "9. Intellectual Property",
                clauses: [
                    {
                        "9.1":
                            "Clients retain ownership of their artwork."
                    },
                    {
                        "9.2":
                            "The Canvas Co retains ownership of its processes, templates, and production methods."
                    }
                ]
            },
            {
                title: "10. Governing Law",
                clauses: [
                    {
                        "10.1":
                            "These Terms are governed by the laws of the Republic of South Africa."
                    }
                ]
            }
        ]
    }
};