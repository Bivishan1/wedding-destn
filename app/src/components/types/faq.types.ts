export interface FAQProps {
    questions: {
      question: string;
      content: string;
    }[];
    expandIcon?: React.ReactNode; // Optional custom expand icon
    collapseIcon?: React.ReactNode; // Optional custom collapse icon
  }