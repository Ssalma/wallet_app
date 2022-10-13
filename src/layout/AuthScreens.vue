<template>
  <div class="container">
    <div class="sub-container">
      <nav>
        <figure>
          <slot name="image">
            <img :src="logo" alt="logo" />
          </slot>
        </figure>
      </nav>
      <div class="main">
        <div class="left">
          <div>
            <h1>
              <slot name="title">Create Your Account</slot>
            </h1>
            <p>
              <slot name="paragraph">Let's get started</slot>
            </p>
          </div>
        </div>
        <div class="right">
          <div class="form-container">
            <form>
              <div class="id-flex">
                <div>
                  <label>
                    <slot name="firstName">First Name</slot>
                  </label>
                  <slot name="input">
                    <div class="styled-input">
                      <input type="text" />
                    </div>
                  </slot>
                </div>
                <div>
                  <label>
                    <slot name="lastName">Last Name</slot>
                  </label>
                  <slot name="input">
                    <div class="styled-input">
                      <input type="text" />
                    </div>
                  </slot>
                </div>
              </div>
              <label>
                <slot name="email">Email Address</slot>
              </label>
              <slot name="input">
                <div class="styled-input">
                  <input type="text" />
                </div>
              </slot>
              <label>
                <slot name="email">Phone Number</slot>
              </label>
              <slot name="input">
                <div class="styled-input">
                  <input type="text" />
                </div>
              </slot>
              <label>
                <slot name="email">Password</slot>
              </label>
              <slot name="input">
                <div class="styled-input">
                  <input type="text" />
                </div>
              </slot>
              <slot name="button">
                <button class="btn">Create Account</button>
              </slot>
              <slot name="login">
                <p class="para">
                  already have an account
                  <span><a href="#" class="sign-in">Sign In</a></span>
                </p>
              </slot>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/Union.svg";
export default {
  name: "authDashboard",

  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
.container {
  background: #f4f7fc;
  height: 100vh;
}

.sub-container {
  width: 100%;
  max-width: calc(100vw - 284px);
  margin: 0px auto;
  padding: 50px 0px 0px 0px;
}

nav{
    margin-bottom: 10px;
}

.main {
  display: flex;
  justify-content: space-between;
}

.form-container {
  background: #ffffff;
  border: 1px solid #dee3eb;
  border-radius: 8px;
  padding: 40px 32px;
}

.id-flex {
  display: flex;
  gap: 10px;
}

label {
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: #6d7a98;
}

.styled-input {
  background: #ffffff;
  border: 1px solid #dee3eb;
  border-radius: 4px;
  margin: 8px 0px 24px 0px;
}

input {
  width: 100%;
  border: none;
  padding: 16px;
}

.btn {
  border: none;
  background: #1f6aec;
  border-radius: 8px;
  width: 100%;
  padding: 12px 0px;
  color: #ffffff;
  margin-bottom: 24px;
}

.para {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #6d7a98;
  flex: none;
  order: 5;
  flex-grow: 0;
}

.sign-in {
  color: #1f6aec;
  text-decoration: none;
}

.left{
    margin-top: 155px;
}
</style>
