<template>
    <transition name="buy-modal-fade">
        <div class="buy-modal-backdrop">
            <div class="buy-modal">
                <header class="buy-modal-header" v-if="!readyToClose">
                    Оформление нового заказа: {{ product.name }}
                    Артикул: {{ product.id }}
                </header>
                <header class="buy-modal-header" v-else>
                    Заказ оформлен
                </header>
                <section class="buy-modal-body" v-if="!readyToClose">
                    <table>
                        <tbody>
                            <tr>
                                <td>Описание:</td>
                                <td>{{ product.description }}</td>
                            </tr>
                            <tr>
                                <td>Цена:</td>
                                <td>{{ product.price }} руб. за {{ product.weight_for_price }} грамм</td>
                            </tr>
                            <tr>
                                <td>Количество:</td>
                                <td>
                                    <input type="number" v-model="quantity" />
                                </td>
                            </tr>
                            <tr>
                                <td>Контактные данные:</td>
                                <td>
                                    <input type="text" v-model="contactInfo" />
                                </td>
                            </tr>
                            <tr>
                                <td>Адрес доставки:</td>
                                <td>
                                    <input type="text" v-model="address" />
                                </td>
                            </tr>
                            <tr>
                                <td>Комментарий к заказу:</td>
                                <td>
                                    <textarea v-model="comment"></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section class="buy-modal-body" v-else>
                    <h3>Спасибо за заказ!</h3>
                    <p>Наш оператор свяжется с вами при первой возможности!</p>
                </section>
                <footer class="buy-modal-footer">
                    <div class="buttons-container" v-if="!readyToClose">
                        <button type="button" class="btn-green button-left btn-cancel" @click="close">
                            <div>
                                Отмена
                            </div>
                        </button>
                        <button type="button" class="btn-green button-right" @click="buy">
                            <div>
                                Заказать
                            </div>
                        </button>
                    </div>
                    <div class="buttons-container-centered" v-else>
                        <button type="button" class="btn-green" @click="close">
                            <div>
                                Закрыть
                            </div>
                        </button>
                    </div>
                </footer>
            </div>

        </div>
    </transition>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    name: 'BuyModal',
    props: ['product'],
    data: function () {
        return {
            quantity: 1,
            contactInfo: '',
            address: '',
            comment: '',
            readyToClose: false
        };
    },
    methods: {
        close() {
            this.$emit('close');
        },

        buy() {
            let templateParams = {
                name: this.product.name,
                id: this.product.id,
                quantity: this.quantity,
                contacts: this.contactInfo,
                address: this.address,
                comment: this.comment
            };
            emailjs.init('29IJ0jY4u-_sIZ-Nb');
            emailjs.send('service_mp2brdj', 'template_vhyvgkb', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (err) {
                    console.log('FAILED...', err);
                });

            this.readyToClose = true;
        }
    },
};
</script>

<style>
.buy-modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.buy-modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.buy-modal-header,
.buy-modal-footer {
    padding: 15px;
    display: идщсл;
}

.buy-modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}

.buy-modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
}

.buy-modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}

.buttons-container {
    display: flex;
    justify-content: space-between;
}

.buttons-container-centered {
    text-align: center;
}

.button-left,
.button-right {
    display: flex;
    flex-direction: column;
}

button div {
    margin: 0 auto;
}

.btn-green {
    padding: 1.5em 3.1em;
    width: 250px;
    border: none;
    border-radius: 7px;
    font-size: 0.8em;
    font-weight: 700;
    letter-spacing: 1.3px;
    color: #fff;
    background-color: #ff3f40;
    box-shadow: 2px 2px 25px -7px #4c4c4c;
    cursor: pointer;
    text-align: center;

    &:active {
        transform: scale(0.97);
    }
}

.btn-cancel {
    background-color: #4a4a4a;
}

.buy-modal-fade-enter,
.buy-modal-fade-leave-to {
    opacity: 0;
}

.buy-modal-fade-enter-active,
.buy-modal-fade-leave-active {
    transition: opacity .5s ease;
}

.buy-modal-body table {
    max-width: 900px;
    max-height: 600px;
}

.buy-modal-body input,
textarea {
    width: 100%;
}
</style>