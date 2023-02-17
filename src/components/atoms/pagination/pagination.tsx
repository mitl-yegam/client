import clsx from 'clsx';
import { ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './pagination.module.scss';
import { Props } from './pagination.type';

const Pagination = ({ row, totalCount, onFetchList }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [list, setList] = useState<ReactNode[]>([]);

  const handlePaging = useCallback(
    async (page: number) => {
      setCurrentPage(page);
      onFetchList && (await onFetchList({ row, currentPage }));
    },
    [currentPage],
  );

  useEffect(() => {
    const renderNumber = () => {
      const elements = [];
      const totalPage = Math.ceil(totalCount / row);

      for (let i = 1; i <= totalPage; i++) {
        elements.push(
          <li
            className={clsx(
              styles['number'],
              'd-center',
              currentPage === i ? styles['active'] : '',
            )}
            key={i}
            onClick={() => handlePaging(i)}>
            {i}
          </li>,
        );
      }

      return elements;
    };

    const elements = renderNumber();
    setList(elements);
  }, [currentPage, totalCount, row]);

  return (
    <section className={clsx(styles['root'], 'container', 'mb-10')}>
      <ol className={clsx(styles['ol-wrapper'], 'row', 'justify-center')}>
        {list}
      </ol>
    </section>
  );
};

export default Pagination;
