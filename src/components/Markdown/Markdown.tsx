import { Wrapper } from './Markdown.style';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import classnames from 'classnames';

export type MarkdownProps = {
  markdown: string;
  mode?: 'dark' | 'light';
  width?: number;
  height?: number;
  zoom?: number;
  wrap?: boolean;
};

export function Markdown(props: MarkdownProps) {
  const { markdown, mode = 'light', zoom, width, height, wrap } = props;

  const className = classnames('Markdown-wrapper', mode, {
    wrap,
  });

  const classNameMarkdown = classnames('mark-down', mode);

  const style: React.CSSProperties = {
    height: height ? `${height}px` : 'auto',
    width: width ? `${width}px` : 'auto',
    zoom: zoom ? zoom : 1,
  };

  const linkTarget = (href: string) => {
    if (href.startsWith('http')) {
      return '_blank';
    }
  };

  return (
    <Wrapper className={className} data-testid='Markdown-wrapper' style={style}>
      <ReactMarkdown
        className={classNameMarkdown}
        children={markdown}
        remarkPlugins={[remarkGfm]}
        linkTarget={linkTarget}
      />
    </Wrapper>
  );
}

export default Markdown;
