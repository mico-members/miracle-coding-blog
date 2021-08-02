import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { articleListAtom } from '../config/atoms';
import { IPR } from '../config/types/dataTypes';

const Foo = () => {
  const [articleList, setArticleList] = useRecoilState(articleListAtom);
  useEffect(() => {
    const bodyParser = ({ body, base, user, number }: IPR) => {
      const info = body.split('|');
      if (info.length !== 16) return { id: -1 };
      const link = info[14].match(/\([^)]+\)/)?.[0].replace(/[\(\)]/g, '');
      return {
        id: number,
        link: link || '잘못된 링크입니다.',
        condition: parseInt(info[13].trim()),
        userImgUrl: user.avatar_url,
        userName: base.ref,
        date: info[11],
      };
    };

    fetch(
      'https://api.github.com/repos/GleamingStar/miracle-coding/pulls?state=closed',
    )
      .then((res) => res.json())
      .then((json) =>
        setArticleList(
          json.map(bodyParser).filter(({ id }: { id: number }) => id !== -1),
        ),
      );
  }, []);

  return <div onClick={() => console.log(articleList)}>123</div>;
};

export default Foo;
