import { Button } from './components/ui/Button';
import { ErrorText } from './components/ui/ErrorText';
import { InfoRow } from './components/ui/InfoRow';
import { Input } from './components/ui/Input';
import { PageTitle } from './components/ui/PageTitle';
import { Paragraph } from './components/ui/Paragraph';
import { SectionTitle } from './components/ui/SectionTitle';
import { Spinner } from './components/ui/Spinner';

function App() {
  return (
    <>
      <PageTitle>Lorem ipsum dolor sit amet.</PageTitle>
      <SectionTitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </SectionTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id ut nemo
        beatae tenetur, voluptatibus quasi sit sed minus enim qui amet
        distinctio magni, illum esse neque tempora nam excepturi aliquam?
      </Paragraph>
      <Input />
      <Button>My button</Button>
      {/* <AppLink to={'/'}>My link</AppLink> */}
      <Spinner />
      <ErrorText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        aspernatur deserunt nulla rem itaque iusto, totam ducimus temporibus,
        aliquam reiciendis illum, fugiat provident molestiae velit illo
        officiis. Quasi, iusto! Mollitia?
      </ErrorText>

      <InfoRow label={'Lorem ipsum dolor'} value={'Quasi, iusto! Mollitia?'} />
      
    </>
  );
}

export default App;
