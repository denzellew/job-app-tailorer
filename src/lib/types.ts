export interface Rsvp {
  id: string;
}

export interface TailorJobApplicationResponse {
    coverLetter: string;
    resume: string;
    recruiterIntro: string;
}

export interface TailorJobApplicationRequest {
    companyName: string;
    jobTitle: string;
    jobDescription: string;
}
