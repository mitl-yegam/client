import clsx from 'clsx';
import Button from 'components/atoms/button';
import enterpriseStyles from '../enterprise/enterprise.module.scss';
import styles from './order.module.scss';
import clip from 'assets/images/icon/icon-clip.svg';
import { useState, useCallback } from 'react';
import { orderContent } from './data';
import { Form } from './order.type';

const Order = () => {
  const [form, setForm] = useState<Form>({
    company: '',
    name: '',
    phone: '',
    email: '',
    content: orderContent,
    files: null,
  });

  // 파일 업로드
  const handleChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files?.length > 0) {
      setForm((prevState) => ({ ...prevState, files }));
    }
  };

  // 파일 삭제
  const handleRemoveFile = useCallback(
    (removeIndex: number) => {
      const { files } = form;
      if (files) {
        const dataTranster = new DataTransfer();
        Array.from(files)
          .filter((file, i) => i !== removeIndex)
          .forEach((file) => {
            dataTranster.items.add(file);
          });

        setForm((prevState) => ({ ...prevState, files: dataTranster.files }));
      }
    },
    [form],
  );

  // input handler
  const handleChange = ({
    target: { value, id },
  }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (id === 'phone') {
      value = value
        .replace(/[^0-9]/g, '')
        .replace(
          /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
          '$1-$2-$3',
        )
        .replace('--', '-');
    }
    setForm((prevState) => ({ ...prevState, [id]: value }));
  };

  const onSubmit = useCallback(
    (e: Event) => {
      e.preventDefault();
      if (!form.company) {
        return alert('회사명을 입력해주세요.');
      }
      if (!form.name) {
        return alert('성함을 입력해주세요.');
      }
      if (!form.phone) {
        return alert('연락처를 입력해주세요.');
      }
      if (!form.email) {
        return alert('이메일을 입력해주세요.');
      }

      console.log('form', form);
    },
    [form],
  );

  return (
    <>
      <section className='container py-0'>
        <div
          className={clsx(
            enterpriseStyles['tab'],
            enterpriseStyles['border-blue'],
            'py-5 py-md-7',
          )}>
          <span className='normal2 blue-100 text-bolder'>견적문의</span>
        </div>
      </section>
      <section className={clsx(styles['root'], 'container py-0')}>
        <form>
          <table className={clsx(styles['table'])}>
            <tbody>
              <tr>
                <th>회사</th>
                <td>
                  <input
                    type='text'
                    placeholder='*회사명'
                    id='company'
                    value={form.company}
                    onChange={handleChange}
                    autoFocus
                  />
                </td>
              </tr>
              <tr>
                <th>성함</th>
                <td>
                  <input
                    type='text'
                    placeholder='*성함'
                    id='name'
                    value={form.name}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>
                  <input
                    type='text'
                    placeholder='*연락처'
                    id='phone'
                    value={form.phone}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input
                    type='email'
                    placeholder='*이메일'
                    id='email'
                    value={form.email}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>문의내용</th>
                <td>
                  <textarea
                    id='content'
                    value={form.content}
                    onChange={handleChange}
                  />
                </td>
              </tr>
              <tr>
                <th>첨부파일</th>
                <td>
                  <div className={styles['filebox']}>
                    <label htmlFor='file'>
                      <div className={styles['upload-file']}>
                        <img src={clip} alt='이미지 or 파일 올리기' />
                        이미지 or 파일 올리기
                      </div>
                    </label>
                    <input
                      type='file'
                      id='file'
                      multiple
                      onChange={handleChangeFiles}
                    />
                    {form?.files &&
                      Object.values(form?.files).map((file, index) => (
                        <div className={styles['file-name-row']} key={index}>
                          <div className={styles['file-name']}>{file.name}</div>
                          <span
                            className={styles['remove-file']}
                            onClick={() => handleRemoveFile(index)}>
                            x
                          </span>
                        </div>
                      ))}
                  </div>
                </td>
              </tr>
              <tr>
                <th>개인정보수집</th>
                <td className='pb-0'>
                  <div className={styles['terms']}>
                    <p>
                      <span className={styles['title']}>
                        개인정보 수집이용에 대한 동의
                      </span>
                      <br />
                      작성자의 소중한 개인정보는 다음과 같은 정책에 따라 수집
                      이용됩니다. <br />
                      당사는 목적에 연관되는 개인정보만을 수집하며, 수집된
                      정보를 투명하고 안전하게 보고 관리할 것을 약속합니다.
                      <br /> 이에 개인정보 수집 및 이용에 대한 동의를 구합니다.
                    </p>
                    <p>
                      <span className={styles['title']}>
                        개인정보 수집·이용목적
                      </span>
                      <br />
                      문의를 남긴 작성자에게 보다 정확한 답변을 위해 수집됩니다.
                    </p>
                    <p>
                      <span className={styles['title']}>수집 항목</span>
                      <br /> 필수항목 : 회사, 성함, 연락처, 이메일, 문의내용
                    </p>
                    <p>
                      <span className={styles['title']}>보유이용기간</span>
                      <br />
                      원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당
                      정보를 지체없이 파기합니다. <br />
                      다만 관계법령에 따라 보존하여하는 경우에는 그러하지 않을
                      수 있습니다.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='d-center mt-12 mb-25'>
            <Button text={'견적 문의하기'} onClick={onSubmit} />
          </div>
        </form>
      </section>
    </>
  );
};

export default Order;
