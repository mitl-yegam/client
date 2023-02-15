import clsx from 'clsx';
import Button from 'components/atoms/button';
import enterpriseStyles from '../enterprise/enterprise.module.scss';
import styles from './order.module.scss';

const Order = () => {
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
        <table className={clsx(styles['table'])}>
          <tr>
            <th>회사</th>
            <td>
              <input type='text' placeholder='*회사명' />
            </td>
          </tr>
          <tr>
            <th>성함</th>
            <td>
              <input type='text' placeholder='*성함' />
            </td>
          </tr>
          <tr>
            <th>연락처</th>
            <td>
              <input type='text' placeholder='*연락처' />
            </td>
          </tr>
          <tr>
            <th>이메일</th>
            <td>
              <input type='text' placeholder='*이메일' />
            </td>
          </tr>
          <tr>
            <th>문의내용</th>
            <td>
              <textarea placeholder='하단 내용을 자세히 기록해 주시면 견적 시 도움이 됩니다' />
            </td>
          </tr>
          <tr>
            <th>첨부파일</th>
            <td>
              <div className={styles['filebox']}>
                <input
                  // className={styles['upload-name']}
                  type='file'
                  multiple
                  placeholder='이미지 or 파일 올리기'
                />
                {/* <label htmlFor='file'></label>
                <input type='file' id='file' /> */}
              </div>
            </td>
          </tr>
          <tr>
            <th>개인정보수집</th>
            <td>
              <p>
                개인정보 수집이용에 대 한 동의 작성자의 소중한 개인정보는 다음과
                같은 정책에 따라 수집 이용됩니다. 당사는 목적에 연관되는
                개인정보만을 수집하며, 수집된 정보를 투명하고 안전하게 보고
                관리할 것을 약속합니다. 이에 개인정보 수집 및 이용에 대한 동의를
                구합니다.
              </p>
              <p>
                개인정보 수집·이용목적 문의를 남긴 작성자에게 보다 정확한 답변을
                위해 수집됩니다.
              </p>
              <p>수집 항목 필수항목 : 회사, 성함, 연락처, 이메일, 문의내용</p>
              <p>
                보유이용기간 원칙적으로 개인정보 수집 및 이용목적이 달성된
                후에는 해당 정보를 지체없이 파기합니다. 다만 관계법령에 따라
                보존하여하는 경우에는 그러하지 않을 수 있습니다.
              </p>
            </td>
          </tr>
        </table>
        <div className='d-center mt-12 mb-25'>
          <Button text={'견적 문의하기'} />
        </div>
      </section>
    </>
  );
};

export default Order;
