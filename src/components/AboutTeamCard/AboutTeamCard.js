
function AboutTeamCard() {
    return (
        <div className="col-4">
            <div className="about-card pt-3">
                <div className="text-center">
                    <img src={require('../../images/CROPPED-DSC_5241.jpg')} width="200" className="rounded-circle about-card-img"  alt='about-team-card-img'/>
                </div>
                <div className=" mt-3 mx-4">
                    <h4 className="mt-2 mb-2">Vladyslav Shkil</h4>
                    <h5 className='mt-2 mb-2'>Director, Lead Constructor</h5>
                    <p className="fonts">Інженер-конструктор з 10 років досвіду:
                        <br/>
                        - вузька спеціалізація на розробці вузлів з'єднання елементів будівель, покрівля, фундамент, фасади, інші елементи.
                        <br/>
                        - виготовлення технологічних карт (здебільшого покрівля і фасад)
                        <br/>
                        - доробка, доопрацювання проектів, (підчищення та шліфовка після архітекторів)
                        <br/>
                        - розрахунок конструкцій по 1 і 2 групам граничних станів (несуча здатність та деформації)
                        <br/>
                        - підрахунок об'ємів робіт (площа покриття, кількість матеріалів і т д)
                        <br/>
                        - виготовлення креслень в цех: зварні конструкції, жерстяні / мідні елементи, елементи з дерева
                        <br/>
                        - унікальна технологія влаштування куполів, обшивки шашкою, або фальц. панелями
                        <br/>
                            - маю сертифікат інженер-проектувальник ІІ категорії "Забезпечення механічного опору та стійкості (МС) "
                    </p>
                    <ul className="about-social-list justify-content-between">
                        <li><i className="custom-about-card-icons-square fa fa-facebook"/></li>
                        <li><i className="custom-about-card-icons-square fa fa-phone"/></li>
                        <li><i className="custom-about-card-icons-square fa fa-envelope"/></li>
                        <li><i className="custom-about-card-icons-square fa fa-telegram"/></li>
                        <li><i className="custom-about-card-icons-square fa fa-instagram"/></li>
                    </ul>
                    {/*<div className="about-buttons">*/}
                    {/*    <button className="btn btn-outline-primary px-4">Message</button>*/}
                    {/*    <button className="btn btn-primary px-4 ms-3">Contact</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default AboutTeamCard;