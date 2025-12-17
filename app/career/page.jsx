import Topbar6 from '@/components/headers/Topbar6';
import Career from '@/components/otherPages/Career';
import Header1 from '@/components/headers/Header1';
export const metadata = {
  title: 'Careers - Join Our Team | PureHomes',
  description: 'Explore career opportunities at PureHomes. Join our team and be part of creating beautiful spaces.',
};

export default function CareerPage() {
  return (
  <>
  <Topbar6 bgColor="bg-main" />
  <Header1/>
  <Career />
  </>
  );
}
